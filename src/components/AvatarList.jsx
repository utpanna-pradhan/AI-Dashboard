import { useEffect, useState } from "react";
import Card from "./Card";

const AvatarList = () => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=3")
      .then((res) => res.json())
      .then((data) => setAvatars(data.users));
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {avatars.map((avatar) => (
        <Card key={avatar.id} avatar={avatar} />
      ))}
    </section>
  );
};

export default AvatarList;
