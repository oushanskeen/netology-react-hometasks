import "./messageHistory.css";

const msgData = {
  id: "уникальный идентификатор сообщения, строка",
  from: "автор сообщения, объект",
  type: "тип сообщения, строка, варианты значений: response, message, typing",
  time: "время публикации сообщения, строка",
  text: "текст сообщения, строка, может отсутствовать"
};

const messages = [{
  id: 'chat-5-1090',
  from: { name: 'Ольга' },
  type: 'response',
  time: '10:10',
  text: 'Привет, Виктор. Как дела? Как идет работа над проектом?'
}];

const Message = ({from,message,time}) => (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp;
        <span className="message-data-name">{from}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {message}
      </div>
    </li>
);
const Response = ({from,message,time}) => (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>{from}
        </span>
        <span className="message-data-time">{` ${time}`}</span>
      </div>
      <div className="message my-message">
        {message}
      </div>
    </li>
);
const Typing = ({from,message}) => (<></>);
export const MessageHistory = () => (
  <ul>
    <Message {...messages[0]}/>
    <Response {...messages[0]}/>
  </ul>
);
/*
export const MessageHistory = ({ list = [] }) => (
  <ul>
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">10:10</span> &nbsp; &nbsp;
        <span className="message-data-name">Ольга</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        Привет, Виктор. Как дела? Как идет работа над проектом?
      </div>
    </li>
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> Виктор
        </span>
        <span className="message-data-time">10:12</span>
      </div>
      <div className="message my-message">
        Привет. Давай сегодня созвонимся. Проект практически готов, и у меня
        есть что показать.
      </div>
    </li>
    <li>{"<!-- … и так далее -->"}</li>
  </ul>
);
*/
