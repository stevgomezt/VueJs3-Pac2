<script setup></script>

<template>
    <!-- ======= Footer ======= -->
    <footer id="footer">
        <div class="container footer-bottom clearfix">
            <div class="copyright">
                PAC 2.0 <strong><span>Emergia</span></strong
                >.
            </div>
            <br /><br />
            <div class="social-links">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"
                    ><i class="bx bxl-instagram"></i
                ></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
            <div class="credits">
                Diseñado por
                <a href="#">Área de Analítica e inteligencia de negocios</a>
            </div>
        </div>
    </footer>
    <!-- End Footer -->
</template>

<style scoped>
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
a {
    color: #5f687b !important;
    margin-right: 10px;
}

a:hover {
    color: #522db2 !important;
}

#footer {
    background-color: #f3f4f6;
    color: #5f687b;
    font-size: 14px;
    position: relative;
}

#footer .footer-top {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 80px 0;
}

#footer .footer-top h3 {
    font-size: 36px;
    font-weight: 700;
    color: #5f687b;
    position: relative;
    font-family: "Poppins", sans-serif;
    padding-bottom: 0;
    margin-bottom: 0;
}

#footer .footer-top p {
    font-size: 15;
    font-style: italic;
    margin: 30px 0 0 0;
    padding: 0;
}

#footer .footer-top .footer-newsletter {
    text-align: center;
    font-size: 15px;
    margin-top: 30px;
}

#footer .footer-top .footer-newsletter form {
    background: #fff;
    padding: 6px 10px;
    position: relative;
    border-radius: 4px;
    text-align: left;
    border: 1px solid #e4e6ea;
}

#footer .footer-top .footer-newsletter form input[type="email"] {
    border: 0;
    padding: 4px 8px;
    width: calc(100% - 100px);
}

#footer .footer-top .footer-newsletter form input[type="submit"] {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border: 0;
    background: none;
    font-size: 16px;
    padding: 0 20px;
    background: #522db2;
    color: #fff;
    transition: 0.3s;
    border-radius: 0 4px 4px 0;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

#footer .footer-top .footer-newsletter form input[type="submit"]:hover {
    background: #522db2;
}

.social-links {
    font-size: 20px;
}

#footer .footer-top .social-links {
    margin-top: 30px;
}

#footer .footer-top .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #eaecef;
    color: #5f687b;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 4px;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
    background: #522db2;
    color: #fff;
    text-decoration: none;
}

#footer .footer-bottom {
    border-top: 1px solid #d9dce2;
    z-index: 2;
    position: relative;
    padding-top: 40px;
    padding-bottom: 40px;
}

#footer .copyright {
    float: left;
}

#footer .credits {
    float: right;
    font-size: 13px;
    margin-top: -30px;
}

@media (max-width: 992px) {
    #footer .copyright,
    #footer .credits {
        float: none;
        -moz-text-align-last: center;
        text-align-last: center;
    }
}
</style>
