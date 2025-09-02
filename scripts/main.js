
const numeroWhatsApp = "50255393167";
        
function pedirWhatsApp(codigo, nombreKit, precio) {
            
const mensaje = `¡Hola! 👋
            
Me interesa el *${nombreKit}* (${codigo}) por Q.${precio}

¿Podrían darme más información sobre:
• Disponibilidad del producto
• Tiempo de entrega
• Formas de pago
• Ubicación para entrega

¡Gracias por ayudar a proteger a nuestras mascotas!❤️`;

            // Codificar el mensaje para URL
            const mensajeCodificado = encodeURIComponent(mensaje);
            
            // Crear la URL de WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
            
            // Abrir WhatsApp en nueva pestaña
            window.open(urlWhatsApp, '_blank');
}
