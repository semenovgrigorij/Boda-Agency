<?php
    include('head.php');
?>

  <body>
    <div class="wrapper-contacts">
      <?php
            $enLink = './contacts.php';
            $enText = 'English';
            $ukLink = './contacts-uk.php';
            $ukText = 'Українська';
        ?>
      <?php
      include('header.php');
      ?>
      <main>
        <section>
          <div class="contacts-blocks">
            <div class="contacts-block-left">
              <div class="contacts-title">
                <h1>Contacts</h1>
                <h4>
                  You can contact us in any
                  way.
                </h4>
              </div>
              <div class="telgr-whatsap-email">
                <div class="telgr">
                  <p>Telegram</p>
                  <a href="https://t.me/bodaagency">https://t.me/bodaagency</a>
                </div>
                <div class="email">
                  <p>Email</p>
                  <a href="mailto:bodamarketingagency@gmail.com">bodamarketingagency<br class="br">@gmail.com</a>
                </div>
                <div class="whatsap">
                  <p>WhatsApp</p>
                  <a href="https://wa.me/+380737948243">+380737948243</a>
                </div>
              </div>
            </div>
            <div class="contacts-block-right">
              <p>Location</p>
              <div class="map">
                <iframe class="desctop"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10184.401220650521!2d30.4214135!3d50.3460345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9cf7a155ac9%3A0xc326a448605409c8!2z0JbQmiAi0J7Qv9GC0LjQvNGW0YHRgtC-Ig!5e0!3m2!1sru!2sua!4v1712740005440!5m2!1sru!2sua"
                  width="380"
                  height="275"
                  style="border-radius: 20px"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <iframe class="mobile"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10184.401220650521!2d30.4214135!3d50.3460345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9cf7a155ac9%3A0xc326a448605409c8!2z0JbQmiAi0J7Qv9GC0LjQvNGW0YHRgtC-Ig!5e0!3m2!1sru!2sua!4v1712740005440!5m2!1sru!2sua"
                  width="310"
                  height="206"
                  style="border-radius: 10px"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <?php
      include('footer.php');
      ?>
    </div>
  <script src="//code.jquery.com/jquery-3.6.1.min.js"></script>
  <script src="./js/page.js"></script>
  </body>
</html>
