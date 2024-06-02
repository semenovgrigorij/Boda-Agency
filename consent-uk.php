<?php
    include('head-uk.php');
  ?>

  <body>
    <div class="wrapper-consent">
     <?php
            $enLink = './consent.php';
            $enText = 'English';
            $ukLink = './consent-uk.php';
            $ukText = 'Українська';
        ?>
      <?php
        include('header-uk.php');
        ?>

      <main>
        <div class="main-wrapper-consent">
          <section>
            <div class="container">
              <h1>Згода на обробку та використання данних</h1>
              <p>
                Я, заповнюючи будь-яку форму на сайті bodaagency.com надаю свою згоду
                Маркетинговій агенції Boda, що знаходиться за веб-адресою
                <a class="adress" href="https://bodaagency.com/">https://bodaagency.com/</a>, на обробку та використання моїх персональних даних, а
                саме: ім’я, прізвище, номер телефону, електронна пошта, та інші
                дані, які я надаю.
              </p>
              <p>
                Я підтверджую, що ознайомлений(а) з метою збору моїх
                персональних даних, яка включає можливість зв’язку зі мною для
                інформування про новини, акції, спеціальні пропозиції сайту
                та/або надання інших маркетингових послуг.
              </p>
              <p>
                Я усвідомлюю своє право на доступ до моїх персональних даних,
                їхнє виправлення, видалення, а також право вимагати припинення
                їх обробки. Для цього мені достатньо звернутися до Маркетингової
                агенції Unity за вказаними контактними даними.
              </p>
              <p>
                Ця згода діє безстроково від моменту надання моїх даних і може
                бути відкликана мною в будь-який час, шляхом надсилання
                письмового повідомлення на адресу <a class="adress" href="mailto:bodamarketingagency@gmail.com"
                >bodamarketingagency@gmail.com</a
              >
              </p>
            </div>
          </section>
        </div>
      </main>
<?php
      include('footer-uk.php');
?>
  <script src="//code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="./js/page.js"></script>
  </body>
</html>