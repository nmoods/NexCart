import styles from './Footer.module.css'
import R from '../../../assets/R.png'
import { MessageCircle, Phone } from "lucide-react";

export const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer_circle_outer"]}></div>
            <div className={styles["footer_circle_inner"]}></div>

            <div className={styles["footer_content"]}>
                <div className={styles["footer_section"]}>
                    <h2 className={styles["footer_brand"]}>NexCart</h2>

                    <div className={styles["contact_section"]}>
                        <h4 className={styles["section_title"]}>Contact Us</h4>

                        <div className={styles["contact_item"]}>
                            <MessageCircle className={styles["contact_icon"]} />
                            <div>
                                <p className={styles["contact_label"]}>Whats App</p>
                                <a href="tel:+12029182132">+1 202-918-2132</a>
                            </div>
                        </div>

                        <div className={styles["contact_item"]}>
                            <Phone className={styles["contact_icon"]} />
                            <div>
                                <p className={styles["contact_label"]}>Call Us</p>
                                <a href="tel:+12029182132">+1 202-918-2132</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles["download_section"]}>
                        <h4 className={styles["section_title"]}>Download App</h4>
                        <div className={styles["app_buttons"]}>
                            <a href="#" className={styles["app_button"]}>
                                <img src={R} alt="App Store" />
                            </a>
                            <a href="#" className={styles["app_button"]}>
                                <img src={R} alt="Google Play" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles["footer_section"]}>
                    <h3 className={styles["section_heading"]}>Most Popular Categories</h3>
                    <ul className={styles["footer_list"]}>
                        <li><a href="#/categories/staples">Staples</a></li>
                        <li><a href="#/categories/beverages">Beverages</a></li>
                        <li><a href="#/categories/personal-care">Personal Care</a></li>
                        <li><a href="#/categories/home-care">Home Care</a></li>
                        <li><a href="#/categories/baby-care">Baby Care</a></li>
                        <li><a href="#/categories/vegetables-fruits">Vegetables & Fruits</a></li>
                        <li><a href="#/categories/snacks-foods">Snacks & Foods</a></li>
                        <li><a href="#/categories/dairy-bakery">Dairy & Bakery</a></li>
                    </ul>
                </div>

                <div className={styles["footer_section"]}>
                    <h3 className={styles["section_heading"]}>Customer Services</h3>
                    <ul className={styles["footer_list"]}>
                        <li><a href="#/about">About Us</a></li>
                        <li><a href="#/terms">Terms & Conditions</a></li>
                        <li><a href="#/faq">FAQ</a></li>
                        <li><a href="#/privacy">Privacy Policy</a></li>
                        <li><a href="#/ewaste">E-waste Policy</a></li>
                        <li><a href="#/cancellation">Cancellation & Return Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles["footer_bottom"]}>
                <p>© 2026 All rights reserved. Reliance Retail Ltd.</p>
            </div>
        </footer>
    );
};