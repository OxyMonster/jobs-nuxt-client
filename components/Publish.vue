<template>
  <a-tabs default-active-key="1" @change="callback">
    <a-tab-pane key="1" tab="ტარიფები">
      <div class="content">
        <span> გამოაქვეყნეთ თქვენი განცხადება ჩვენს საიტზე:<br /><br /> </span>

        <br /><br /><a name="regular"></a
        ><span style="text-decoration: underline"
          >სტანდარტული განცხადება<br /><br /></span
        >ერთი განცხადების გამოქვეყნების ღირებულებაა 30 ლარი.<br /><br />ვაკანსიის
        განცხადების შემთხვევაში ეს ტარიფი ვრცელდება&nbsp;1 განცხადებაში
        მოთავსებულ 1 ვაკანსიაზე. თუ ერთ განცხადებაში მოთავსებულ ვაკანსიათა
        ოდენობა&nbsp;ერთზე მეტია, ამ შემთხვევაში მოქმედებს შემდეგი ტარიფები:<br /><br />2&nbsp;ვაკანსია
        ერთ განცხადებაში: 40 ლარი.<br />3-4 ვაკანსია ერთ განცხადებაში: 50
        ლარი.<br />5-6 ვაკანსია ერთ განცხადებაში: 90 ლარი.<br />7-10 ვაკანსია
        ერთ განცხადებაში: 130 ლარი.<br />11-15 ვაკანსია ერთ განცხადებაში: 170
        ლარი.<br />16-20 ვაკანსია ერთ განცხადებაში: 200 ლარი.<br />20-ზე მეტი
        ვაკანსია ერთ განცხადებაში: 250 ლარი.<br /><br />ლოგოტიპის შემთხვევაში,
        საფასურს ემატება 20 ლარი თითო განცხადებაზე.<br />ორენოვანი განცხადების
        შემთხვევაში,&nbsp;საფასურს ემატება 10 ლარი თითო განცხადებაზე.<br /><br /><br /><span
          style="text-decoration: underline"
          ><a id="training"></a>ტრენინგის განცხადება<br /><br /></span
        >ერთი განცხადების გამოქვეყნების ღირებულებაა 50 ლარი. ლოგოტიპის
        შემთხვევაში საფასურს ემატება 30 ლარი თითო განცხადებაზე.<br /><br />ტრენინგების
        შესახებ განცხადებებზე შეღავათები და ფასდაკლებები არ ვრცელდება.
        <p>
          <br /><br /><a name="vip"></a
          ><span style="text-decoration: underline"
            >ვიპ განცხადება<strong><br /><br /></strong></span
          ><span style="font-weight: 400"
            >თუ თქვენ გსურთ უზრუნველყოთ თქვენი განცხადების მაქსიმალური
            ხილვადობა, ისარგებლეთ ჩვენი ვიპ მომსახურებით:<br /><br /></span
          >თქვენი განცხადება გამოქვეყნდება საიტის თავში მოთავსებულ და საგანგებოდ
          აღნიშნულ ვიპ ველში, სადაც მხოლოდ 10 განცხადების ადგილია.&nbsp;<span
            style="font-weight: 400"
            >თქვენი განცხადება ვიპ-ველში დარჩება 7 დღის განმავლობაში. 7 დღიანი
            პერიოდის გასვლის შემდეგ თქვენი განცხადება გადაინაცვლებს სტანდარტული
            განცხადებების ჩამონათვალში, სადაც დარჩება განაცხადის შემოტანის
            საბოლოო ვადის ამოწურვამდე.<br /><br /></span
          ><span style="font-weight: 400"
            >მასზე დიდი მოთხოვნის გამო, ვიპ განყოფილებაში ადგილები წინასწარ
            იჯავშნება.<br /><br /></span
          >ერთი ვიპ განცხადების განთავსების ღირებულებაა 70 ლარი.<br /><br />ეს
          ტარიფი ვრცელდება ერთ განცხადებაში მოთავსებულ ერთ ვაკანსიაზე. თუ ერთ
          განცხადებაში მოთავსებულ ვაკანსიათა ოდენობა ერთს აჭარბებს, ამ
          შემთხვევაში მოქმედებს შემდეგი ტარიფები:<br /><br />2 ვაკანსია ერთ
          განცხადებაში: 85 ლარი.<br /><span style="font-weight: 400"
            >3-4 ვაკანსია ერთ განცხადებაში: 100 ლარი.<br /></span
          ><span style="font-weight: 400"
            >5-6 ვაკანსია ერთ განცხადებაში: 130 ლარი.<br /></span
          ><span style="font-weight: 400"
            >7-10 ვაკანსია ერთ განცხადებაში: 170 ლარი.<br /></span
          ><span style="font-weight: 400"
            >11-15 ვაკანსია ერთ განცხადებაში: 210 ლარი.<br /></span
          ><span style="font-weight: 400"
            >16-20 ვაკანსია ერთ განცხადებაში: 250 ლარი.<br /></span
          ><span style="font-weight: 400"
            >20-ზე მეტი ვაკანსია ერთ განცხადებაში: 300 ლარი.<br /><br />ლოგოტიპის
            შემთხვევაში საფასურს ემატება 20 ლარი თითო განცხადებაზე.<br /><br /></span
          >ვიპ მომსახურებაზე რაიმე სხვა ფასდაკლება არ ვრცელდება.<br /><br />ვიპ
          ველი განკუთვნილია მხოლოდ ვაკანსიის განცხადებებისთვის.<br /><br /><br /><span
            style="text-decoration: underline"
            >ფასდაკლებები<br /><br /></span
          >1. განცხადების განმეორებით განთავსება/განახლება:<br /><br />განცხადების
          განმეორებით განთავსებაზე მოქმედებს 50% ფასდაკლება. მოცემული ფასდაკლება
          არ ეხება კომერციული მომსახურებების (ფასიანი ტრენინგების) შესახებ
          განცხადებებს.<br /><br />განცხადების განმეორებით განთავსება
          შესაძლებელია თავდაპირველი განთავსებიდან 3 თვის განმავლობაში.
          განცხადება განმეორებით განთავსდება მხოლოდ პირვანდელი სახით. ფასდაკლება
          ვრცელდება მხოლოდ ერთ განმეორებით გამოქვეყნებაზე.<br /><br />2.
          გრძელვადიანი მოხმარების გეგმა:<br /><br />10 განცხადების განთავსება 1
          წლის განმავლობაში: 15% ფასდაკლება.<br />15 განცხადების განთავსება 1
          წლის განმავლობაში: 20% ფასდაკლება.<br /><br />გრძელვადიანი მოხმარების
          გეგმის შეკვეთა და მისი საფასურის გადახდა უნდა მოხდეს წინასწარ. ეს
          გეგმა არ ვრცელდება კომერციული მომსახურებების (ფასიანი ტრენინგების)
          შესახებ განცხადებებზე. გრძელვადიანი მოხმარების გეგმის შეთავსება სხვა
          ფასდაკლებასთან დაუშვებელია.<br /><br />3. სხვა:<br /><br />ბავშვთა
          დაცვის საკითხებზე მომუშავე ადგილობრივი არასამთავრობო
          ორგანიზაციებისთვის მომსახურება უფასოა. გამონაკლის შემთხვევას
          წარმოადგენს შეადგენს ვიპ-მომსახურებით სარგებლობა.<br /><br />ფასდაკლება
          ადგილობრივი არამომგებიანი ორგანიზაციებისთვის და უფასო
          ტრეინინგების/სემინარების და სტიპენდიების პროგრამების შესახებ
          ინფორმაციის განთავსებაზე: 20%. ფასდაკლება არ ვრცელდება
          ვიპ-მომსახურებაზე.<br /><br />
        </p>
        <br />^
        <a href="http://jobs.ge/services/#top">გვერდის დასაწყისში</a>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="გამოაქვეყნე" force-render>
      <div id="tabs_output" style="padding: 10px">
        <div style="height: 20px"></div>
        <h1>გამოაქვეყნე</h1>
        <p>
          <br />გამოგზავნეთ თქვენი განცხადების ტექსტი მისამართზე:
          <a href="mailto:publish@jobs.ge">publish@jobs.ge</a>&nbsp;ან
          <a href="mailto:info@jobs.ge">info@jobs.ge</a>&nbsp;&nbsp;
        </p>
        <p>
          განცხადებები, რომლებშიც არ არის მითითებული განაცხადის შემოტანის
          საბოლოო ვადა, ავტომატურად ქვეყნდება 1 თვის ვადით.
        </p>
        <p>
          <br /><span style="text-decoration: underline">ანგარიშსწორება</span>
        </p>
        <p>
          ანგარიშსწორება ხდება საბანკო გადარიცხვით ჩვენი კომპანიის ანგარიშზე:<br />&nbsp;<br />თიბისი
          ბანკის ცენტრალური ფილიალი<br />კოდი: 220101830<br />ანგარიშის #:
          GE23TB0600000107467123<br />მიმღები: შპს "ჯობს.გე"
        </p>
        <p>ჩვენი საიდენტიფიკაციო კოდია 205035282.</p>
        <p>
          ანგარიშსწორება ხდება კლიენტის მიერ შესაბამისი ინვოისის მიღებიდან 7
          კალენდარული დღის განმავლობაში. გამონაკლისები განიხილება კონკრეტულ
          შემთხვევებში.
        </p>
        <p>
          <br /><span style="text-decoration: underline"
            >დამატებითი ინფორმაცია</span
          >
        </p>
        <p>
          ჩვენ უფლებას ვიტოვებთ ჩავასწოროთ მცირე გრამატიკული შეცდომები და
          შევცვალოთ ტექსტის ფორმატი მისი კითხვადობის გაუმჯობესების მიზნით. ყველა
          შემოსული განცხადება გამოქვეყნდება ჩვენი საიტის ერთიანი ფორმატის
          შესაბამისად. გამონაკლისები არ დაიშვება.ჩვენს საიტზე არსებული
          ელექტრონული კონტაქტის ფორმის მეშვეობით შემოსული განცხადებების სიზუსტე
          გადამოწმდება გამომგზავნთან. თუ გამომგზავნი არ უპასუხებს თხოვნას ამ
          გზით შემოსული განცხადების გადამოწმების შესახებ, განცხადება არ
          გამოქვეყნდება.
        </p>
        <p>
          თუ განცხადება ქვეყნდება ქსელურ მარკეტინგის ჩაბმის მიზნით, ეს პირდაპირ
          უნდა იყოს მითითებული განცხადების დასაწყისში.&nbsp;<br /><br />ჩვენ
          უფლებას ვიტოვებთ მომსახურებაზე უარი ვუთხრათ კომპანიებს, რომლებიც
          სისტემატურად არღვევენ თანასწორუფლებიანი დასაქმების სტანდარტებს ან/და
          ჩაბმულნი არიან არალეგალურ საქმიანობაში.
        </p>
        <p>
          დამქირავებელი, რომელსაც სურს განცხადებაში არ მიუთითოს საკუთარი ვინაობა
          და საკონტაქტო ინფორმაცია, ვალდებულია ეს ინფორმაცია მოგვაწოდოს ცალკე.
          კონფიდენციალობა მკაცრად იქნება დაცული.
        </p>
      </div>
    </a-tab-pane>
    <a-tab-pane key="3" tab="რატომ ჩვენ">
      <div id="tabs_output" style="padding: 10px">
        <div style="height: 20px"></div>
        <h1>რატომ ჯობს.გე</h1>
        <p>
          <br />თუ თქვენ ჯერ კიდევ არ ხართ დარწმუნებული, რომ ჯობს.გე თქვენი
          განცხადების გავრცელების საუკეთესო გზაა, გაეცანით შემდეგ ფაქტებს:<br /><br />**
          ჯობს.გე ყველაზე ძველი და გამოცდილი დასაქმების საიტია საქართველოში:
          მისი პირველი ვარიანტი 1998 წელს შეიქმნა.<br />** წლების განმავლობაში,
          ჯობს.გე ირიცხებოდა საქართველოს ყველაზე პოპულარულ საიტთა ათეულში.<br />**
          ჯობს.გეს ყოველდღიურად 200-დან 300-მდე განცხადება ემატება. ჯობს.გე
          ქართულ ვებ-სივრცეში ერთ-ერთი ყველაზე დინამიური საიტია.<br />** ჯობს.გე
          ღირსეული და სანდო პარტნიორის რეპუტაციით სარგებლობს კლიენტებში, რომელთა
          შორის არიან საერთაშორისო ორგანიზაციები და კომპანიები, საელჩოები და
          დიპლომატიური მისიები, სახელმწიფო დაწესებულებები, ადგილობრივი
          კომპანიები და არასამთავრობო ორგანიზაციები. შეუძლებელია ათასობით
          კლიენტი ცდებოდეს.<br />** ჯობს.გე ოფიციალურად რეგისტრირებულია როგორც
          შეზღუდული პასუხისმგებლობის საზოგადოება. ყველა ანგარიშსწორება
          ხორციელდება საბანკო გადარიცხვით და ყველა გადასახადის გადახდა სრულად
          ხდება.<br />** ჯობს.გე უფასოდ უწევს მომსახურებას ბავშვთა საკითხებზე
          მომუშავე ადგილობრივ არასამთავრობო ორგანიზაციებს. დამატებით, 20%
          ფასდაკლება ვრცელდება ყველა ადგილობრივი არასამთავრობო ორგანიზაციის
          განცხადებებზე და უფასო ტრეინინგების/სემინარების და სტიპენდიების
          პროგრამების შესახებ ინფორმაციის განთავსებაზე.
        </p>
        <p>&nbsp;</p>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
export default {};
</script>

<style>
</style>