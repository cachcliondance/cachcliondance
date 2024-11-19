import codeofconductimg from "../assets/codeofconduct_img.jpg";

const CodeOfConduct = () => {
  return (
    <div>
      <div className="code-of-conduct-banner">
        <img
          className="resized-cc-image"
          src={codeofconductimg}
          alt="Description of the image"
          loading="lazy"
        />
        <div className="cc-text-overlay">
          <h1>Code of Conduct</h1>
        </div>
      </div>
      <div className="code-of-conduct">
        <h1>
          Dragon and lion dances are the art forms require martial arts
          discipline.<br></br>All applicants <span>MUST READ</span> our
          following rules before you want to join our troupe:
        </h1>
        <p>
          1. Treat the public, instructors, and teammates with kindness and
          respect at all times. Maintain positive and appropriate behavior
          whenever you are with the team. ​<br></br>
          <br></br>
          2. Be attentive during training and make the most of your time to
          enhance your skills and physical conditioning. When instructors,
          senior members, or teammates are explaining or demonstrating, please
          listen carefully and avoid side conversations. Train collaboratively
          and with an open mind. ​​<br></br>
          <br></br>
          3. Help keep the training hall clean and safe by refraining from
          bringing food, gum, or sugary beverages. Water is welcome to keep you
          hydrated. ​<br></br>
          <br></br>​ 4. Always act in a way that reflects positively on the
          organization and its members. Use kind and respectful language and
          avoid any inappropriate words or actions. ​<br></br>
          <br></br>​ 5. Be humble and respectful towards other Martial Arts
          disciplines, dragon and lion dance groups, their instructors, and
          their unique styles of practice. ​​<br></br>
          <br></br>
          6. For safety, avoid wearing jewelry during training or performances.
          Arrive on time and lend a hand with setting up and cleaning up
          equipment to ensure a smooth session. ​<br></br>
          <br></br>​ 7. Wear uniforms or clothing that reflects respect for
          yourself and the community during training and performances. Avoid
          tank tops, sleeveless tops, cropped shirts, tight pants, or low-rise
          jeans. T-shirts, sweatpants, and tennis shoes are highly recommended
          for practice. ​​<br></br>
          <br></br>
          8. Aim to be on time and let your instructors know in advance if you
          are unable to attend a practice or performance. Communication shows
          respect for your teammates and the effort everyone puts in. ​​
          <br></br>
          <br></br>
          9. Treat all equipment gently and with care, as it is essential and
          valuable to the team. Be mindful of how you use it to prevent damage.
          Everyone is encouraged to pitch in by helping set up and take down
          equipment before and after each practice or performance. Teamwork
          ensures everything runs smoothly and efficiently. ​​
          <br></br>
          <br></br>
          10. Instructors will guide you to roles that align with your current
          skills, age, and abilities. As you grow and improve, you may be
          offered new opportunities to take on additional responsibilities.
          Advancing within the team is achieved through effort and dedication.
        </p>
      </div>
      <div className="religious-concerns">
        <h1>Religious Concerns</h1>
        <p>
          For those of you who have a spiritual heritage, or are religous in
          nature; please understand that in the Asian cultures especially in
          Chinese culture, the dragon and lion dances involve a 3 stage bow. We
          want to make it clear that this is no more than a cultural or
          respectful bow. It is not an act of worship where you would be giving
          undue praise or laud to an entity or would become Buddhist. For
          instance: If you were in ancient Egypt and you approached the Pharaoh,
          you would come to his throne with your head bowed and never turn your
          back to him. Rather you would bow repeatedly and back out of his
          presence. This is a cultural sign of respect due to his position. When
          you are in costume whether it is the lion, dragon or the Tai Tau Fut
          (the Buddha man), the role you are in is no different than that of an
          actor/actress in a drama. The lion, dragon or the Tai Tau Fut is
          performing the bow, NOT you personally.
        </p>
      </div>
    </div>
  );
};

export default CodeOfConduct;
