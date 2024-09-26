import ChatRoom from "./_components/ChatRoom";
import style from "./messages.module.css";

type Prop = {
  children: React.ReactNode;
};

export default function MessagesLayout({ children }: Prop) {
  return (
    <section className={style.container}>
      {children}
      <div className={style.rightSection}>
        <ChatRoom />
      </div>
    </section>
  );
}