<?php
include('head.php');
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
    include('header.php');
    ?>
    <main>
      <section>
        <div class="main-wrapper-response">
          <h1>
            Hey people!<br />
            Your application has been
            successfully sent to BODA Agency!
          </h1>
          <p>
            Please expect a message from<br />
            our manager soon.
          </p>
          <div class="return">
            <a href="/index.php">Main page</a>
          </div>
        </div>
      </section>
    </main>
    <?php
    include('footer.php');
    ?>
    <script src="//code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="./js/page.js"></script>
</body>

</html>