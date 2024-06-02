<?php
  include('head.php');
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
    include('header.php');
    ?>

    <main>
      <div class="main-wrapper-consent">
        <section>
          <div class="container">
            <h1 class="container-title">Consent for Data Processing and Use</h1>
            <p>
              By filling out any form on the site bodaagency.com, I hereby give my
              consent to BODA Marketing Agency, located at web address <a class="adress" href="https://bodaagency.com/">https://bodaagency.com/</a>,
              to process and use my personal data, specifically: name,
              surname, phone number, email address, and other data that I
              provide.
            </p>
            <p>
              I confirm that I am informed about the purpose of collecting my
              personal data, which includes the possibility of contacting me
              to inform about news, promotions, special offers of the site
              and/or providing other marketing services.
            </p>
            <p>
              I am aware of my right to access my personal data, their
              correction, deletion, as well as the right to request the
              cessation of their processing. To exercise these rights, it is
              sufficient for me to contact BODA Marketing Agency using the
              provided contact information.
            </p>
            <p>
              This consent is effective indefinitely from the moment of
              providing my data and can be revoked by me at any time, by
              sending a written notice to the address <a class="adress" href="mailto:bodamarketingagency@gmail.com">bodamarketingagency@gmail.com</a>
            </p>
          </div>
        </section>
      </div>
    </main>

    <?php
    include('footer.php');
    ?>
    <script src="//code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="./js/page.js"></script>
</body>

</html>