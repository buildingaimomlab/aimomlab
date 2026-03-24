import { Heart, Clock, MessageCircle, Gamepad2, Users, ChevronDown } from "lucide-react";
import { useState } from "react";

const days = [
  {
    day: "Day1",
    question: "今天最開心的是什麼？",
    reminder: "用表情和語氣放大孩子的情緒",
    aiResponse: "「聽起來你那時候真的好開心！」",
    game: "畫出今天開心或挑戰的場景，媽媽孩子互換看",
  },
  {
    day: "Day2",
    question: "今天有沒有不喜歡的事情？",
    reminder: "先理解，再給支持",
    aiResponse: "「是不是有一點不舒服？」",
    game: "用黏土捏出今天的不舒服或疲累情緒(沒有黏土也可以自製無毒黏土，用麵粉加水)",
  },
  {
    day: "Day3",
    question: "如果今天是小超人，你想幫誰？",
    reminder: "讚美動機，而不是結果",
    aiResponse: "「你願意幫他，媽媽覺得你好溫暖。」",
    game: "用積木創造幫助場景",
  },
];

export default function Home() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="min-h-screen bg-[#fef9f5] text-[#3d2b1f] font-sans">
      {/* Nav */}
      <nav className="bg-[#fef9f5]/90 backdrop-blur-sm sticky top-0 z-50 border-b border-[#f0ddd0]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 no-underline">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            <div className="text-lg font-bold text-[#806b60] bg-[transparent]">AI媽媽研究室</div>
          </a>
          <a
            href="#download"
            className="text-sm px-5 py-2 rounded-full hover:bg-[#c27385] transition bg-[#ffa8aa] text-[#ffffff]"
          >
            免費下載
          </a>
        </div>
      </nav>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-[#d48a9b] text-sm font-medium tracking-widest uppercase mb-4">
          每天只需 10 分鐘讓家慢慢變溫柔
        </p>
        <h1 className="text-4xl md:text-5xl leading-tight mb-6 text-[#806b60] bg-[transparent] font-black">
          7天溫柔AI陪伴計畫
        </h1>
        <div className="space-y-3 text-base md:text-lg max-w-xl mx-auto mb-10 text-[#806b60] border-t-[#7a5c4a] border-r-[#7a5c4a] border-b-[#7a5c4a] border-l-[#7a5c4a]">
          <p
            className="text-[#806b60] border-t-[#7a5c4a] border-r-[#7a5c4a] border-b-[#7a5c4a] border-l-[#7a5c4a]">每天陪孩子學習卻不知道怎麼開始？</p>
          <p>AI 很強，但不知道怎麼用在孩子身上？</p>
          <p>想陪伴孩子成長，但時間總是不夠？</p>
        </div>
        <p className="mb-8 text-[#806b60] border-t-[#3d2b1f] border-r-[#3d2b1f] border-b-[#3d2b1f] border-l-[#3d2b1f] font-semibold bg-[transparent] text-[20px]">
          AI媽媽研究室幫你把 AI 變成每天都能用的育兒工具
        </p>
        <a
          href="#download"
          className="inline-block text-white font-semibold px-8 py-4 rounded-full hover:bg-[#c27385] transition text-lg shadow-md bg-[#ffa8aa]"
        >
          免費下載溫柔 AI 陪伴計畫
        </a>
        <div className="mt-10 flex justify-center">
          <ChevronDown className="text-[#d48a9b] animate-bounce w-6 h-6" />
        </div>
      </section>
      {/* Features */}
      <section className="bg-[#fff5ee] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-bold text-center mb-3 text-[#806b60] border-t-[#3d2b1f] border-r-[#3d2b1f] border-b-[#3d2b1f] border-l-[#3d2b1f] text-[26px]">計畫特色</h2>
          <p className="text-center text-[#7a5c4a] mb-12 max-w-xl mx-auto">
            這份對話包不是要你成為更厲害的父母，只是想在一天結束時，留下一個小小的空間。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: "每天 1 個問題",
                desc: "簡單易做，不會增加負擔。每天短短的時光，累積深厚的情感。",
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "AI範例回應 & 溫柔提醒",
                desc: "學會怎麼回應孩子、引導情緒。不批判，只傾聽，建立安全感。",
              },
              {
                icon: <Gamepad2 className="w-6 h-6" />,
                title: "小互動遊戲建議",
                desc: "增加親子互動的趣味。透過遊戲，讓對話變得輕鬆自然。",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "專屬年齡分組",
                desc: "對應孩子不同發展階段，提供最適合的對話深度與內容。",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#f0ddd0] text-center"
              >
                <div className="w-12 h-12 bg-[#fde8dc] rounded-full flex items-center justify-center mx-auto mb-4 text-[#d48a9b]">
                  {f.icon}
                </div>
                <h3 className="font-bold mb-2 text-[#806b60] bg-[transparent] text-[17px]">{f.title}</h3>
                <p className="text-[#806b60] bg-[transparent] text-[15px]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 text-[#806b60] font-semibold">
          <div className="md:w-1/3 flex flex-col items-center">
            <img
              src="https://aim-mom-lab--moijour79620.replit.app/assets/%E6%9C%AA%E5%91%BD%E5%90%8D-1_1773986778613-BjOBl2Pv.png"
              alt="AI媽媽研究室創辦人 Mia"
              className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-[#fde8dc] border-t-[#ffffff] border-r-[#ffffff] border-b-[#ffffff] border-l-[#ffffff] border-t-[3px] border-r-[3px] border-b-[3px] border-l-[3px]"
            />
            <p className="mt-4 text-[#d48a9b] font-medium">創辦人 Mia</p>
            <p className="text-sm text-[#7a5c4a]">關於我們</p>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-6 text-[#806b60] bg-[transparent]">AI媽媽研究室</h2>
            <div className="space-y-4 leading-relaxed font-medium text-[#806b60] bg-[transparent]">
              <p>我是兩個孩子的媽媽，在育兒的路上我也跌倒哭過。</p>
              <p>
                後來我自己學會了溫柔教養，希望把這些教養過程結合 AI 的建議，
                分享給一起在辛苦育兒路上的媽媽們。
              </p>
              <p>在你已經很努力的時候，喘一口氣，</p>
              <p>擁抱沒被好好抱過的自己。</p>
              <p>你們不是孤單一人，讓我們一起溫柔地陪伴孩子長大。</p>
              <p className="font-medium text-[#806b60] bg-[transparent]">
                當媽媽被理解，孩子就會慢慢安心；
                <br />
                當孩子被看見，家庭就會慢慢和諧。
              </p>
              <p>這份對話，不是為了教養成功，</p>
              <p>而是為了，讓愛有機會被說出來 🤍</p>
            </div>
          </div>
        </div>
      </section>
      {/* Tagline */}
      <section className="bg-gradient-to-br from-[#d48a9b] to-[#e8b6c3] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
            AI 不該取代陪伴，<br />而是讓陪伴變得更輕鬆。
          </h2>
        </div>
      </section>
      {/* Coming Soon */}
      <section className="bg-[#fff5ee] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] shadow-xl p-10 md:p-14">
            <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest bg-[#fbbf24] text-[#ffffff] border-t-[#d48a9b] border-r-[#d48a9b] border-b-[#d48a9b] border-l-[#d48a9b]">
              Coming Soon
            </span>
            <h2 className="font-bold mb-2 bg-[transparent] text-[#ffa8aa] text-[25px]">即將推出</h2>
            <h3 className="font-semibold mb-8 text-[#806b60] bg-[transparent] text-[30px]">AI媽媽實戰課程</h3>
            <div className="flex justify-center">
              <ul className="space-y-4 text-[#7a5c4a] mb-8 text-left">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#d48a9b] flex-shrink-0"></div>
                  AI 親子互動設計
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#d48a9b] flex-shrink-0"></div>
                  每日應用系統
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#d48a9b] flex-shrink-0"></div>
                  真正可持續的 AI 教養方式
                </li>
              </ul>
            </div>
            <p className="text-[#7a5c4a]">課程即將上線，敬請期待 🤍</p>
          </div>
        </div>
      </section>
      {/* Download */}
      <section id="download" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-3 text-[#3d2b1f]">
          免費下載溫柔 AI 陪伴計畫
        </h2>
        <p className="text-center text-[#7a5c4a] mb-10">
          選擇適合您孩子的年齡段，立即下載 7 天溫柔陪伴計畫。
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              age: "3-5 歲",
              url: "https://aimomlab.kit.com/3to5old",
              desc: "孩子情緒來時不知道怎麼回應？",
            },
            {
              age: "6-9 歲",
              url: "https://aimomlab.kit.com/6to9old",
              desc: "想引導學習但不想變成壓力？",
            },
            {
              age: "10-12 歲",
              url: "https://aimomlab.kit.com/10to12old",
              desc: "不知道該怎麼拉近跟孩子的距離?",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-2 border-[#f0ddd0] rounded-2xl p-6 text-center hover:border-[#d48a9b] hover:shadow-md transition group"
            >
              <div className="w-14 h-14 bg-[#fde8dc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-[#d48a9b]" />
              </div>
              <h3 className="font-bold text-[#3d2b1f] mb-2 text-lg">
                免費下載 {item.age} 溫柔 AI 陪伴計畫
              </h3>
              <p className="text-sm text-[#7a5c4a] mb-4">{item.desc}</p>
              <span className="inline-block bg-[#d48a9b] text-white text-sm px-5 py-2 rounded-full group-hover:bg-[#c27385] transition">
                立即下載
              </span>
            </a>
          ))}
        </div>
      </section>
      {/* Preview */}
      <section className="bg-[#fff5ee] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10 text-[#3d2b1f]">計畫內容預覽</h2>
          <div className="flex gap-3 justify-center mb-8">
            {days.map((d, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeDay === i
                    ? "bg-[#d48a9b] text-white"
                    : "bg-white border border-[#f0ddd0] text-[#7a5c4a] hover:border-[#d48a9b]"
                }`}
              >
                {d.day}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#f0ddd0] max-w-2xl mx-auto">
            <div className="inline-block bg-[#fde8dc] text-[#d48a9b] text-xs font-bold px-3 py-1 rounded-full mb-4">
              {days[activeDay].day}
            </div>
            <h3 className="text-xl font-bold text-[#3d2b1f] mb-6">
              {days[activeDay].question}
            </h3>
            <div className="space-y-4">
              <div className="bg-[#fef9f5] rounded-xl p-4">
                <p className="text-xs font-bold text-[#d48a9b] mb-1">媽媽溫柔提醒</p>
                <p className="text-[#3d2b1f] text-sm">{days[activeDay].reminder}</p>
              </div>
              <div className="bg-[#fef9f5] rounded-xl p-4">
                <p className="text-xs font-bold text-[#d48a9b] mb-1">AI 回應示範</p>
                <p className="text-[#3d2b1f] text-sm">{days[activeDay].aiResponse}</p>
              </div>
              <div className="bg-[#fef9f5] rounded-xl p-4">
                <p className="text-xs font-bold text-[#d48a9b] mb-1">互動小遊戲</p>
                <p className="text-[#3d2b1f] text-sm">{days[activeDay].game}</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-[#7a5c4a] mb-4">想看完整 7 天對話？立即免費下載完整計畫 🤍</p>
            <a
              href="#download"
              className="inline-block bg-[#d48a9b] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#c27385] transition"
            >
              免費下載溫柔 AI 陪伴計畫
            </a>
          </div>
        </div>
      </section>
      {/* Footer CTA */}
      <section className="bg-[#fde8dc] py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#3d2b1f] mb-4">溫柔，是最好的陪伴</h2>
          <p className="text-[#7a5c4a] mb-2">陪伴不在於時間長短，而在於那份全然的專注。</p>
          <p className="text-[#7a5c4a] mb-8">願這七天，成為您與孩子心中最柔軟的記憶。</p>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#05b34c] transition"
          >
            加入 LINE 媽媽專屬社群
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#3d2b1f] text-[#b89080] text-center py-6 text-sm">
        <p>© 2025 AI媽媽研究室. All rights reserved.</p>
      </footer>
    </div>
  );
}
