const Contact = () => (
    <section id="contact" className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-4">Feel free to reach out to me through the following platforms:</p>
        <ul>
            <li>Email: <a href="mailto:your-email@example.com" className="text-blue-500">your-email@example.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/yuriy-zvirblis/" className="text-blue-500">Yuriy Zhvirblis</a></li>
            <li>Discord: <a href="https://discord.com/invite/your-discord-channel" className="text-blue-500">Your Discord Channel</a></li>
        </ul>
        <a href="/cv.pdf" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">Download CV</a>
    </section>
)

export default Contact
