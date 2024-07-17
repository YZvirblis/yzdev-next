const About = () => (
    <section id="about" className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-4">I am a full-stack web developer skilled in JavaScript, TypeScript, Node.js, React, Angular, Next.js, MongoDB, and GraphCMS.</p>
        <div className="flex space-x-4 overflow-x-auto">
            {/* Add technology logos here */ }
            <img src="/images/js-logo.png" alt="JavaScript" className="h-12 w-12" />
            <img src="/images/ts-logo.png" alt="TypeScript" className="h-12 w-12" />
            {/* Add more logos */ }
        </div>
    </section>
)

export default About
