import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
  return (
    <div className="relative w-full h-40">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <LoadingOutlined
          className="text-blue-500"
          style={{ fontSize: "40px" }}
        />
        <p className="text-lg text-blue-500 tracking-wide">Loading...</p>
      </div>
    </div>
  );
}
