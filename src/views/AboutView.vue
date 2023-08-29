<template>
  <h2>Data Display Page</h2>
  <div ref="test">
    <div class="manage">
     <img
      src="@/assets/Logo.png"
      alt="Logo"
      class="logo-image"
    >
       <br>
     <p>ใบลาป่วย ลากิจส่วนตัว ลาคลอดบุตร ลาพักผ่อน</p>
    <div class="div1" ><h4>กรณีลาไม่เกิน3วัน</h4></div>
     <table class="t1">
      <tr>
       <td >เขียนที่ เทศบาลตำบลสุเทพ</td>
      </tr>
    </table>
     <table class="t1">
    <tr>
    <td >วันที่</td>
    <td ><p class="dottedline2">{{ date }} </p></td>
    </tr>
</table>  
   <table class="t0">
<tr>
    <td >เรื่อง</td>
    <td class="dottedline1" >{{ about }} </td>
</tr>
</table>
<table class="t0">
<tr>
     <td >เรียน ท่านนายก </td>
</tr>
</table>
<br>
    <table class="t2">
  <tr>
    <td>ข้าพเจ้า</td>
    <td class="dottedline1">{{ employeeName }}</td>
    <td>ตำแหน่ง</td>
    <td class="dottedline1">{{ employeePosition }}</td>
  </tr>
</table>
   <table class="t0">
<tr>
    <td >สังกัด</td>
    <td class="dottedline2" >{{ employeeDepartment }} </td>
     <td >เทศบาล ตำบลสุเทพ อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ </td>
</tr>
</table> 
<table class="t0">
<tr>
    <td >ขอลา</td>
    <td class="dottedline1" >{{ leaveType }} </td>
     <td >เนื่องจาก </td>
      <td class="dottedline1" >{{ recipient }} </td>
</tr>
</table> 
<table class="t0">
<tr>
    <td >ตั่งแต่วันที่</td>
    <td class="dottedline1">{{ startDate }} </td>
     <td >ถึงวันที่</td>
      <td class="dottedline1" >{{ endDate }} </td>
</tr>
</table> 
<table class="t0">
<tr>
    <td >มีกำหนด</td>
    <td class="dottedline3">{{ sumday }} </td>
     <td >ข้าพเจ้าได้ลา</td>
      <td class="dottedline3">{{ leaveType}} </td>
       <td >ครั้งสุดท้ายเมื่อ</td>
</tr>
</table> 
<table class="t0">
<tr>
    <td >วันที่</td>
    <td class="dottedline1">{{ paststartDate }} </td>
     <td >ถึงวันที่</td>
      <td class="dottedline1">{{ pastendDate}} </td>
</tr>
</table> 
<table class="t0">
<tr>
    <td >รวม</td>
    <td class="dottedline3">{{ pastsumday }} </td>
     <td >ในระหว่างลาติดต่อข้าพเจ้าได้ที่</td>
      <td class="dottedline1">{{ phone }} </td>
</tr>
</table> 
<table class="t0">
<tr>
    <td >ในระหว่างลา</td>
    <td class="dottedline3">{{ leaveType }} </td>
     <td >ข้าพเจ้าขอมอบหมายงานในหน้าที่รับผิดชอบให้</td>
</tr>
</table> 
<table class="t0">
<tr>
    <td class="dottedline4" >{{ sup }} </td>
    <td >ตำแหน่ง</td>
    <td class="dottedline4" >{{ supdepart }} </td>
    <td >ปฏติบัติหน้าที่แทน</td>
</tr>
</table>
<div class = "sig">
<p>ขอแสดงความนับถือ</p>
<p>(ลงชื่อ)</p>
<br>
<br>
<br>
<p>( {{employeeName}} )</p>
</div>
   <br>
<div>
<p class = "moved-text1 ">สถิติการลา</p>
<table class = "leave" style="width:25%">
   <tr>
    <td class = "tdleave">ประเภทการลา</td>
    <td class = "tdleave">ลามาแล้ว</td>
     <td class = "tdleave">ลานี้</td>
    <td class = "tdleave">รวมเป็น</td>
  </tr>
  <tr>
    <td class = "tdleave">{{leaveType}}</td>
    <td class = "tdleave">13</td>
    <td class = "tdleave">2</td>
    <td class = "tdleave">15</td>
  </tr>
</table>
  </div>
     <br>
  <div class = "sig">
<p>ความเห็นผู้บังคับบัญชา</p>
<p>(ลงชื่อ)</p>
<p class="dottedline6"></p>
<p>คำสั่ง</p>
</div>
<div class="movediv">
<input type="checkbox" class="ckeckss">
<label for="vehicle1" class="movetext" style="font-size: 14px; font-family: 'Sarabun', sans-serif;">ความเห็นผู้ตรวจสอบ</label>
<label for="vehicle1" class="ckeck"  style="font-size: 14px; font-family: 'Sarabun', sans-serif;"> อนุญาติ</label>
<input type="checkbox" class="ckecks">
<label for="vehicle1" class="ckecks"  style="font-size: 14px; font-family: 'Sarabun', sans-serif;"> ไม่อนุญาติ</label>
</div>
<div class="footer-container">
<div class = "footer1">
<p>
      (ลงชื่อ)
      <span class="employee-name">{{ employeeName }}</span>
</p>
<p>
      ตำแหน่ง
      <span class="employee-name">{{ employeeDepartment }}</span>
</p>
<p>
      วันที่
      <span class="employee-name">{{ date }}</span>
</p>
</div>
<div class = "footer2">
<p>
      (ลงชื่อ)
      <span class="employee-name">{{ employeeName }}</span>
</p>
<p>
      ตำแหน่ง
      <span class="employee-name">{{ employeeDepartment }}</span>
</p>
<p>
      วันที่
      <span class="employee-name">{{ date }}</span>
</p>
</div>
</div>
</div>
  </div>
      <p @click="generatePDF">Click to Generate PDF</p>
</template>

<script>
import { mapState } from 'vuex';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
  data() {
    return {
      imageUrl: 'src/assets/Logo.png' 
    };
  },
  computed: {
    ...mapState([
      'about',
    'leaveType',
    'recipient',
    'employeeName',
    'employeePosition',
    'employeeDepartment',
    'startDate',
    'endDate' ,
    'sumday',
    'paststartDate',
    'pastendDate',
    'pastsumday',
    'phone',
    'sup',
    'supdepart',
    'date'
    ]),
  },
  methods: {
    async generatePDF() {
      const doc = new jsPDF();
      try {
        await this.waitForContentToLoad(); // Wait for content to fully load
        
       const scaleFactor = 1; // Adjust this value to control the zoom level
    const canvas = await html2canvas(this.$refs.test, {
      scale: scaleFactor, // Apply the zoom level to the captured canvas
    });

    const img = canvas.toDataURL('image/jpeg');
    doc.addImage(img, 'JPEG', -90, 0);
    doc.save('sample.pdf');
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    },
    waitForContentToLoad() {
      return new Promise(resolve => {
        if (document.readyState === 'complete') {
          resolve();
        } else {
          window.onload = resolve;
        }
      });
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
.footer-container {
  display: flex;
  justify-content: flex-start; /* Align items to the left */
}
.employee-name {
  margin-left: 65px; /* Adjust the margin as needed */
}
.footer2{
  text-align: left;
   position: absolute;
  left: 800px;
}
.footer1{
  position: relative;
  text-align: left;
  right: -445px;
}
p {
    font-size: 14px;
   font-family: 'Sarabun', sans-serif;
  }
  td {
    font-size: 14px;
   font-family: 'Sarabun', sans-serif;
  }
.manage{
  position: relative;
  top: -50px
}
.logo-image {
  position: relative;
  right: 225px;
  top: 100px;
  width: 100px; /* Set your desired width */
  height: 100px; /* Maintain aspect ratio */
}
.movediv{
  position: relative;
  top: -80px;
}
.div1 {
  position: relative;
  right: -900px;
  top: -40px;
  width: 120px;
  height: 50px;
  text-align: center;
  border: 3px solid black;
  font-family: 'Sarabun', sans-serif;
}
.t1{
  position: relative;
  right: -900px;
    top: -40px;
}
.movetext{
  position: relative;
  left: -145px;
}
.ckecks{
  position: relative;
  right: -125px;
}
.ckeckss{
  position: relative;
  right: -175px;
}
.ckeck{
  position: relative;
  right: -65px;
}
.leave{
  position: relative;
  right: -445px;
  top: -90px;
    border:1px solid black;
    border-collapse: collapse;
}
.tdleave{
   border:1px solid black;
   border-collapse: collapse;
}
.inline-p {
  display: inline;
   position: relative;
    left: -10px;
}
.moved-text1 {
    position: relative;
    left: -225px;
      top: -80px;
  }
.moved-text {
    position: relative;
    left: -200px;
  }
.moveds-text {
    position: relative;
    left: -215px;
  }
.t0{
  position: relative;
  right: -445px;
  border-collapse: collapse;
  border-spacing: 0px; 
  top: -50px;
}
.t2{
  position: relative;
  right: -470px;
  border-collapse: collapse;
  border-spacing: 0px; 
  top: -50px;
  max-width: 100%; 
}
.dottedline1{
  border-bottom: 1px dotted #000; 
  display: block; 
  width: 245px;
  display: inline-block; 
  white-space: normal;
}
.dottedline2{
  border-bottom: 1px dotted #000; 
  display: block; 
  width: 150px;
    display: inline-block; 
  white-space: normal;
}

.dottedline3{
  border-bottom: 1px dotted #000; 
  display: block; 
  width: 100px;
    display: inline-block; 
  white-space: normal;
}
.dottedline4{
  border-bottom: 1px dotted #000; 
  display: block; 
  width: 200px;
    display: inline-block; 
  white-space: normal;
}
.dottedline5{
  position: relative;
  border-bottom: 1px dotted #000; 
  width: 200px;
  left: 600px;
    display: inline-block; 
  white-space: normal;
}
.dottedline6{
  position: relative;
  border-bottom: 1px dotted #000; 
  width: 300px;
  left: 550px;
    display: inline-block; 
  white-space: normal;
}
.tr1{
   padding: 0px;
}
.sig{
  position: relative;
  right: -150px;
  top: -60px;
}
</style>