// app/page.tsx
'use client';

import Image from 'next/image';
import Head from 'next/head';
import './globals.css';

export default function Home() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('コピーしました: ' + text);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <Head>
        <title>山田くらぅど</title>
        <meta name="description" content="山田くらぅど入口" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-wrap items-center justify-center gap-8">
        {/* 見出しは横幅いっぱいにセンター寄せ */}
        <h1 className="w-full text-4xl font-bold mb-8 text-center">
          山田くらぅど
        </h1>

        {/* 各ロボットカード */}
        <div className="flex flex-col items-center">
          <a
            href="https://yamada-cloud.degima.ai/"
            className="transition-transform duration-1000 ease-in-out hover:scale-555"
          >
            <Image
              src="/Yamada-RX78-2.png"
              alt="Xilinx Zynq-7010 FPGA with ECC Memory"
              width={76.8}
              height={115.2}
              className="rounded-lg shadow-lg"
            />
          </a>
          <p
            className="mt-2 text-sm text-gray-300 cursor-pointer hover:underline"
            onClick={() => copyToClipboard('ssh yamada@yamada.degima.ai -p 10001')}
          >
            Xilinx Zynq-7010 FPGA with ECC Memory
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://yamada-cloud.degima.ai/"
            className="transition-transform duration-1000 ease-in-out hover:scale-555"
          >
            <Image
              src="/Yamada-MS06S.png"
              alt="NVIDIA GeForce 8800GTX"
              width={76.8}
              height={115.2}
              className="rounded-lg shadow-lg"
            />
          </a>
          <p
            className="mt-2 text-sm text-gray-300 cursor-pointer hover:underline"
            onClick={() => copyToClipboard('ssh yamada@yamada.degima.ai -p 10002')}
          >
            NVIDIA GeForce 8800GTX
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://yamada-cloud.degima.ai/"
            className="transition-transform duration-1000 ease-in-out hover:scale-555"
          >
            <Image
              src="/Yamada-MSM04.png"
              alt="Raspberry Pi Zero W V1.1"
              width={76.8}
              height={115.2}
              className="rounded-lg shadow-lg"
            />
          </a>
          <p
            className="mt-2 text-sm text-gray-300 cursor-pointer hover:underline"
            onClick={() => copyToClipboard('ssh yamada@yamada.degima.ai -p 10003')}
          >
            Raspberry Pi Zero W V1.1
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://yamada-cloud.degima.ai/"
            className="transition-transform duration-1000 ease-in-out hover:scale-555"
          >
            <Image
              src="/Yamada-MS-07B.png"
              alt="Intel Xeon Phi 71S1P"
              width={76.8}
              height={115.2}
              className="rounded-lg shadow-lg"
            />
          </a>
          <p
            className="mt-2 text-sm text-gray-300 cursor-pointer hover:underline"
            onClick={() => copyToClipboard('ssh yamada@yamada.degima.ai -p 10004')}
          >
            Intel Xeon Phi 71S1P
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://yamada-cloud.degima.ai/"
            className="transition-transform duration-1000 ease-in-out hover:scale-555"
          >
            <Image
              src="/Yamada-MS-09.png"
              alt="DEC Alpha 21164 266MHz"
              width={76.8}
              height={115.2}
              className="rounded-lg shadow-lg"
            />
          </a>
          <p
            className="mt-2 text-sm text-gray-300 cursor-pointer hover:underline"
            onClick={() => copyToClipboard('ssh yamada@yamada.degima.ai -p 10004')}
          >
            DEC Alpha 21164 266MHz
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://yamada-cloud.degima.ai/"
            className="transition-transform duration-1000 ease-in-out hover:scale-555"
          >
            <Image
              src="/Yamada-MS-14S.png"
              alt="Sun Microsystems SPARCstation 5"
              width={76.8}
              height={115.2}
              className="rounded-lg shadow-lg"
            />
          </a>
          <p
            className="mt-2 text-sm text-gray-300 cursor-pointer hover:underline"
            onClick={() => copyToClipboard('ssh yamada@yamada.degima.ai -p 10004')}
          >
            Sun Microsystems SPARCstation 5
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://yamada-cloud.degima.ai/"
            className="transition-transform duration-1000 ease-in-out hover:scale-555"
          >
            <Image
              src="/Yamada-MSN-02.png"
              alt="AMD Radeon HD 5870"
              width={76.8}
              height={115.2}
              className="rounded-lg shadow-lg"
            />
          </a>
          <p
            className="mt-2 text-sm text-gray-300 cursor-pointer hover:underline"
            onClick={() => copyToClipboard('ssh yamada@yamada.degima.ai -p 10005')}
          >
            AMD Radeon HD 5870
          </p>
        </div>

        {/* キャッチコピー */}
        <p className="w-full mt-8 text-lg text-center">
          みんなのお家で動態保存しようぜ！
        </p>
      </main>

      <footer className="mt-8 text-sm text-gray-400 text-center">
        古い計算機を動態保存するための完全無保証クラウドサービス(つっこみ禁止!)
      </footer>
    </div>
  );
}
