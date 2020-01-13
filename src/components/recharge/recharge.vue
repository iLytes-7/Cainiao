<template>
  <div class="recharge">
    <div class="method">
      <p>充值方式</p>
      <ul>
        <li @click="selectAutoMethod(index)" v-for="(item,index) in totalMethodList" :key="index"
            :class="{liActive:index===autoCurr}">
          <img v-if="item.category_text.indexOf('支付宝') != -1" src="../../assets/image/daalipay.png" alt="">
          <img v-else-if="item.category_text.indexOf('微信') != -1" src="../../assets/image/dawepay.png" alt="">
          <img v-else-if="item.category_text.indexOf('网银') != -1" src="../../assets/image/wy.png" alt="">
          <img v-else-if="item.category_text.indexOf('快捷') != -1" src="../../assets/image/kj.png" alt="">
          <img v-else src="../../assets/image/daimg.png" alt="">
          <p>{{item.category_text}}</p>
        </li>
      </ul>
      <div class="methodList">
        <van-radio-group v-model="methodRadio">
          <van-cell-group>
            <van-cell clickable v-for="(item,index) in tempList.list" :key="index"
                      @click="selectMethodRadio(index)">
              <div slot="title" class="methodList-title">
<!--                <img src="../../assets/image/xiaoimg.png" alt="">-->
                <span style="max-width: 37%;display:inline-block;overflow: hidden;height: 2rem;white-space:nowrap;
    text-overflow: ellipsis;">{{item.bank_name_local
                  }}</span>
                <span>单笔限额 ¥{{item.minDeposit}}-¥{{item.maxDeposit}}</span>
              </div>
              <van-radio checked-color="#FF6D44" slot="right-icon" :name="index"/>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
      <div class="transferAmount">
        <p>金额（元）</p>
        <van-field v-model="amount" type="number" placeholder="" @input="change">
          <div slot="label" style="text-align: right">￥</div>
        </van-field>
        <div class="amountList">
          <div v-for="(item,index) in amountData" :key="item" :class="{amountActive:item==amountcurr}"
               @click="selectAmount(item)">
            {{item}}元
          </div>
        </div>
      </div>
      <!--      <van-button  v-if="curr==4" class="btn" color="#FF6D44" @click="goTraditional">立即存款</van-button>-->
      <van-button class="btn" color="#FF6D44" @click="handleCharge">立即充值</van-button>
    </div>
    <loading :show="loading"></loading>
    <van-popup v-model="showImg">
      <img :src="image" alt="">
    </van-popup>
    <van-popup v-model="showQrcode">
      <template>
        <div class="qrcodeBox">
          <div id="QRCodeNone" style="width:54%;height:200px;display:none;">
          </div>
          <div id="QRCode" style="width:54%;height:200px;padding: 1rem">
            <img :src="qrcodeImg" alt="">
          </div>
          <div style="color: black;text-align: center;margin-top: 2rem">扫描二维码，以继续完成充值！</div>
        </div>
      </template>
    </van-popup>

  </div>
</template>

<script>
    import {depositPaymentCategories, thirdPartyDepositForm, thirdPartyDepositRequest} from '@/api/recharge';
    import {mapGetters} from 'vuex'
    import QRCode from 'qrcodejs2'

    export default {
        name: "recharge",
        data() {
            return {
                autoCurr: 0,
                // manualCurr:0,
                amountcurr: 100,
                tempList: [],
                image: '',
                amount: 100,
                loading: false,
                amountData: [100,200, 500, 1000],
                methodRadio: 0,
                tempArry: {},
                showImg: false,
                qrcodeImg: '',
                qrcode: '',
                showQrcode: false,
                autoMethodList: [],
                totalMethodList: [],
                manualMethodList: [],
                method: [],
            }
        },
        created() {
            this.method = this.method1
            let data = {
                api_key: "ea443b05c7067089bd2716f47257ee73",
                username: this.name,
                token: this.token
            }
            this.loading = true
            depositPaymentCategories(data).then(response => {
                this.autoMethodList = response.result.payment_cats.auto
                this.totalMethodList = this.autoMethodList.reverse()
                this.manualMethodList = response.result.payment_cats.manual
                this.totalMethodList = this.totalMethodList.concat(this.manualMethodList)
                this.tempList = this.totalMethodList[0]
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        computed: {
            ...mapGetters([
                'name',
                'token'
            ])
        },
        methods: {
            selectAmount(item) {
                this.amount = item;
                this.amountcurr = item;
            },
            selectAutoMethod(index) {
                this.autoCurr = index
                this.methodRadio = 0
                this.tempList = this.totalMethodList[index]
            },
            change(val) {
                const x = this.amountData.find(item => {
                    return item == val
                })
                if (x) {
                    this.amountcurr = x
                } else {
                    this.amountcurr = -1
                }
            },
            bindQRCode(url) {
                let qrcode = new QRCode(document.getElementById("QRCodeNone"), {
                    text: url,//二维码数据
                    width: 200,
                    height: 200,
                    colorDark: '#333333', // 二维码颜色
                    colorLight: '#ffffff', // 二维码背景色
                });
                let myCanvas = document.getElementsByTagName('canvas')[0]
                let img = this.convertCanvasToImage(myCanvas)
                this.qrcodeImg = img
            },
            convertCanvasToImage(canvas) {
                return canvas.toDataURL("image/png");
            },
            selectMethodRadio(item) {
                this.methodRadio = item;
            },
            handleThirdPartyDepositRequest() {
                this.$dialog.confirm({
                    title: '提示',
                    message: '确定以继续充值，此过程需您耐心等待几秒，请求过程中不要进行其他操作！'
                }).then(() => {
                    let data = {
                        api_key: "ea443b05c7067089bd2716f47257ee73",
                        username: this.name,
                        token: this.token,
                        bankTypeId: this.tempList.list[this.methodRadio].bankTypeId,
                        deposit_from: this.tempArry.default_fields.deposit_from,
                        minDeposit: this.tempArry.default_fields.minDeposit,
                        maxDeposit: this.tempArry.default_fields.maxDeposit,
                        deposit_amount: this.amount
                    }
                    this.loading = true
                    thirdPartyDepositRequest(data).then(response => {
                        console.log(response);
                        let url = response.result.url
                        let data = response.result.params
                        if (response.result.type_text === 'form') {
                            this.axios({
                                headers: {'Content-Type': 'multipart/form-data'},
                                method: 'post',
                                url: url,
                                data: data
                            });
                        }
                        if (response.result.type_text === 'URL') {
                            location.href = url
                        }
                        if (response.result.type_text === 'qrcode') {
                            if (response.result.subtype === 'base64') {
                                console.log("base64");
                                if (response.result.base64.substr(0, 11) == 'data:image/') {
                                    this.image = response.result.base64
                                    this.showImg = true
                                } else {
                                    this.image = 'data:image/gif;base64,' + response.result.base64
                                    this.showImg = true
                                }
                            }
                            if (response.result.subtype === 'url') {
                                this.qrcode = url
                                this.showQrcode = true
                                this.$nextTick(() => {
                                    this.bindQRCode(url)
                                })
                            }
                            if (response.result.subtype === 'base64_url') {
                                this.qrcode = response.result.base64_url
                                this.showQrcode = true
                                this.$nextTick(() => {
                                    this.bindQRCode(this.qrcode)
                                })
                            }
                            if (response.result.subtype === 'image_url') {
                                console.log("image_url");
                                this.image = response.result.image_url
                                this.showImg = true
                            }
                        }
                        this.loading = false
                    }).catch(() => {
                        this.loading = false
                    })
                }).catch(() => {

                });
            },
            handleCharge() {
                let length = this.autoMethodList.length
                if (this.autoCurr < length) {
                    if (Number(this.amount) > this.tempList.list[this.methodRadio].maxDeposit || Number(this.amount) <
                        this.tempList.list[this.methodRadio].minDeposit) {
                        this.$toast('请填写该种方式限额内的提款金额');
                        return
                    }
                    let data = {
                        api_key: "ea443b05c7067089bd2716f47257ee73",
                        username: this.name,
                        token: this.token,
                        bankTypeId: this.tempList.list[this.methodRadio].bankTypeId
                    }
                    this.loading = true
                    thirdPartyDepositForm(data).then(response => {
                        this.tempArry = response.result
                        this.handleThirdPartyDepositRequest()
                        this.loading = false
                    }).catch(() => {
                        this.loading = false
                    })
                } else {
                    if (Number(this.amount) > this.tempList.list[this.methodRadio].maxDeposit || Number(this.amount) < this.tempList.list[this.methodRadio].minDeposit) {
                        this.$toast('请填写该种方式限额内的提款金额');
                        return
                    }
                    this.$router.push({
                        path: "/charge",
                        query: {
                            chargeAmount: this.amount,
                            bankTypeId: this.tempList.list[this.methodRadio].bankTypeId
                        }
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .recharge {
    .van-popup--center {
      border-radius: 0.8rem;
    }

    ul {
      overflow-x: auto;
      list-style: none;
      white-space: nowrap;
      color: #AFACB4;
      height: 9rem;

      li {
        width: 7rem;
        padding: 1rem 1rem 0rem;
        margin-right: 1.5rem;
        margin-left: 0;
        border: 0.1rem solid #32204C;
        display: inline-block;
        text-align: center;
        background-color: #32204C;
        border-radius: 0.5rem;


        &:last-of-type {
          margin-right: 0.5rem;
        }
      }
    }

    .liActive {
      border-color: #FF6D44 !important;
    }

    .amountList .amountActive {
      border-color: #FF6D44 !important;
      color: #FF6D44;
    }

    .qrcodeBox {
      background-color: white;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  }

  li > p {
    font-size: 1.2rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #AFACB4;
  }

  li > img {
    width: 3rem;
  }

  .method > p {
    font-size: 1.5rem;
    color: #AFACB4;
  }

  .transferAmount > p {
    font-size: 1.2rem;
    color: #AFACB4;
  }

  .amountList {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .amountList > div {
    width: 18%;
    text-align: center;
    background-color: #32204C;
    border-radius: 0.3rem;
    padding: 0.5rem 0rem;
    color: #AFACB4;
    border: 0.1rem solid #32204C;
  }

  .methodList {
    margin: 3rem 0rem;
  }

  .methodList-title {
    line-height: 3rem;
    position: relative;
    font-size: 1.1rem;
  }

  .methodList-title img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 2rem;
  }

  .methodList-title span {
    margin-left: 0rem;
    color: #7E7B83;
  }

  .methodList-title span:last-of-type {
    float: right;
    margin-right: 1rem;
    margin-left: 0;
  }

  .methodList span:first-of-type {
    color: #FFFFFF;
  }
</style>
