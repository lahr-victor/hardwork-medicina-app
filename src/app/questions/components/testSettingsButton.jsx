import { MdSettings } from "react-icons/md";

export default function TestSettingsButton() {
  return (
    <div className="flex flex-row gap-2 text-3xl text-black border-2 border-black border-solid rounded-md">
      <button type="button">
        <MdSettings />
      </button>
    </div>
  );
}
