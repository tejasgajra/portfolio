// app/components/TejasResume/TejasResume.tsx
import React from 'react';
import styles from './Resume.module.css';

const Resume: React.FC = () => {
  return (
    <div className={styles.bg}>
    <div className={styles.container}>
      <p className={styles.p}><strong className={styles.strong}>Tejas Gajra</strong></p>
      <p className={styles.p}>
        +91 87586 01611 | <a className={styles.a} href="mailto:gajra.tejas14@gmail.com">gajra.tejas14@gmail.com</a> | 
        <a className={styles.a} href="https://linkedin.com/in/tejasgajra">linkedin.com/in/tejasgajra</a> | 
        <a className={styles.a} href="https://github.com/tejasgajra">github.com/tejasgajra</a>
      </p>

      <h2 className={styles.h2}>Education</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <strong className={styles.strong}>Indian Institute of Technology, Madras</strong>, Chennai, India
          <p className={styles.p}>Bachelor of Science in Data Science and Applications, CGPA: 8.3</p>
          <p className={styles.p}>Jan 2021 – 2024 May</p>
        </li>
        <li className={styles.li}>
          <strong className={styles.strong}>Gujarat Technological University</strong>, Ahmedabad, India
          <p className={styles.p}>Bachelor of Engineering in Mechanical Engineering, CGPA: 8.6</p>
          <p className={styles.p}>Aug. 2017 – Aug. 2021</p>
        </li>
      </ul>

      <h2 className={styles.h2}>Experience</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <strong className={styles.strong}>Software Engineer, Data Science</strong> (May 2024 – Present)
          <p className={styles.p}><em>Fiery (formerly EFI)</em>, Bengaluru, India</p>
          <ul className={styles.ul}>
            <li className={styles.li}>Built a full-stack NLP-based print job system with Angular frontend, Node.js backend, and LLaMA 3.1 via vLLM for structured job ticket generation.</li>
            <li className={styles.li}>Integrated function calling and custom post-processing to extract print parameters and reduce model hallucinations.</li>
            <li className={styles.li}>Enabled email-based job submission via AWS SES and Lambda.</li>
            <li className={styles.li}>Created "AskDB," a natural language interface for internal database querying.</li>
          </ul>
        </li>
        <li className={styles.li}>
          <strong className={styles.strong}>Associate Software Engineer, Data Science</strong> (July 2023 – May 2024)
          <p className={styles.p}><em>Fiery (formerly EFI)</em>, Bengaluru, India</p>
          <ul className={styles.ul}>
            <li className={styles.li}>Developed an app to detect TV ads using audio fingerprinting.</li>
            <li className={styles.li}>Built a RAG-based chat product using Mistral-7B LLM and Qdrant.</li>
            <li className={styles.li}>Wrote backend services in TypeScript for ink estimation.</li>
          </ul>
        </li>
        <li className={styles.li}>
          <strong className={styles.strong}>Data Science Intern</strong> (Jan. 2023 – July 2023)
          <p className={styles.p}><em>EFI</em>, Bengaluru, India</p>
          <ul className={styles.ul}>
            <li className={styles.li}>Developed an e-commerce platform prototype for selling customized decor items</li>
            <li className={styles.li}>Improved visual search with image processing using BLIP models.</li>
            <li className={styles.li}>Built live mockup generator using ImageMagick for user uploaded images on home decor items</li>
          </ul>
        </li>
        <li className={styles.li}>
          <strong className={styles.strong}>Teaching Assistant</strong> (Sept. 2022 – Dec 2022)
          <p className={styles.p}><em>IIT Madras</em>, Chennai, India</p>
          <ul className={styles.ul}>
            <li className={styles.li}>Mentored 20 students in a Statistics course.</li>
            <li className={styles.li}>Conducted tutorials and doubt-clearing sessions.</li>
          </ul>
        </li>
      </ul>

      <h2 className={styles.h2}>Projects</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <strong className={styles.strong}>Bloglite</strong> | <em>Python, Flask, Vue.js, SQLite, Redis</em> (June 2020 – Present)
          <ul className={styles.ul}>
            <li className={styles.li}>Built a full-stack web app with a REST API in Flask and Vue.js frontend.</li>
            <li className={styles.li}>Included social features like image posting, following, and liking.</li>
            <li className={styles.li}>Implemented token-based authentication and caching with Redis.</li>
          </ul>
        </li>
      </ul>

      <h2 className={styles.h2}>Technical Skills</h2>
      <p className={styles.p}><strong className={styles.strong}>Languages:</strong> Python, JavaScript, TypeScript, SQL, HTML/CSS, R</p>
      <p className={styles.p}><strong className={styles.strong}>Frameworks:</strong> Vue.js, Angular, Node.js, Flask, FastAPI</p>
      <p className={styles.p}><strong className={styles.strong}>Tools:</strong> Git, Docker, VS Code, Neovim, Linux</p>
      <p className={styles.p}><strong className={styles.strong}>Libraries:</strong> Pandas, NumPy, Scikit-Learn, PyTorch, Huggingface, OpenAI</p>
    </div>
    </div>
  );
};

export default Resume;

