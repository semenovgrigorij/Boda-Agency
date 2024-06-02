<?php
    include('head-uk.php');
  ?>
  <body>
    <div class="wrapper-response">
    <?php
            $enLink = './response-message.php';
            $enText = 'English';
            $ukLink = './response-message-uk.php';
            $ukText = 'Українська';
        ?>
       <?php
      include('header-uk.php');
      ?>
      <main>
        <section>
          <div class="main-wrapper-response">
            <h1>
              Дякуємо, ваша заявка була успішно відправлена в<br> BODA Aгенція!
            </h1>
            <p>
              Будь ласка очікуйте повідомлення від нашого<br> менеджера найближчим
              часом.
            </p>
            <div class="return">
              <a href="/index-uk.php">На головну</a>
            </div>
          </div>
        </section>
      </main>
      <?php
      include('footer-uk.php');
?>
  <script src="//code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="./js/page.js"></script>
  </body>
</html>