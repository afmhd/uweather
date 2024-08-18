import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "شیراز"


  return (
    <div style={{ direction:"rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>





        <c-x style={{ backgroundColor: "powderblue" }}>
          <br-x/>
          <f-c style={{padding:"0 20px"}}>اب و هوا :</f-c>
          <f-cse>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "skyblue", borderRadius: 15 }}>
              <img src="https://irmapserver.ir/research/34/temp" style={{ height: 30, objectFit: "contain" }} />
                <sp-2/>
                <f-14>طوری که هوا احساس می شود :</f-14>
                <sp-3/>
                <f-14>C</f-14>
                <f-14>º</f-14>
                <sp-4/>
                <f-14>{props.feelslike}c</f-14>

              </f-cc>
 
              <f-cc>
            </f-cc>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "skyblue", borderRadius: 15 }}>
              <img src="https://irmapserver.ir/research/34/humidity" style={{ height: 30, objectFit: "contain" }} />
                <sp-2/>
                <f-14>رطوبت :</f-14>
                <sp-3/>
                <f-14> RH </f-14>
                <f-14> %  </f-14>
                <sp-4/>
                <f-14>{props.humidity}</f-14>

              </f-cc>

          </f-cse>
          <br-x/>
          <f-cse>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "skyblue", borderRadius: 15 }}>
              <img src="https://irmapserver.ir/research/34/pressure.png" style={{ height: 30, objectFit: "contain" }} />
                <sp-2/>
                <f-14> فشار :</f-14>
                <sp-3/>
                <f-14>hPa </f-14>
                <f-14></f-14>
                <sp-4/>
                <f-14>{props.pressure}</f-14>

              </f-cc>
              
 
              <f-cc>
            </f-cc>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "skyblue", borderRadius: 15 }}>
              <img src="https://irmapserver.ir/research/34/cloud" style={{ height: 30, objectFit: "contain" }} />
                <sp-2/>
                <f-14> ابر :</f-14>
                <sp-3/>
                <f-14> % </f-14>
                <f-14></f-14>
                <sp-4/>
                <f-14>{props.cloudcover}</f-14>

              </f-cc>

          </f-cse>

          <f-sb></f-sb>
          <f-sb></f-sb>



        </c-x>








      </Window >
    </div>




  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let data = await (await fetch("https://irmapserver.ir/research/api/weather")).json()

  let feelslike = data.current_condition[0].FeelsLikeC
  let humidity = data.current_condition[0].humidity
  let pressure = data.current_condition[0].pressure
  let cloudcover=data.current_condition[0].cloudcover






  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelslike,
        humidity,
        pressure,
        cloudcover,
        // nlangs,
      })
    },
  }
}