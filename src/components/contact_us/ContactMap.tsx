"use client";

import React from "react";

const ContactMap = () => {
    return (
        <section className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] relative overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.3990875736154!2d176.16452847568848!3d-37.686825472007676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ddbdcf31994ed%3A0x6325ddbd94a4c66e!2s162%20Durham%20Street%2C%20Tauranga%203110%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1772605176765!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="border-0 filter grayscale-[20%] contrast-[1.1]"
            ></iframe>
        </section>
    );
};

export default ContactMap;
