interface NoteBoxProps {
  note: string;
  noteText: string;
}

export default function NoteBox({ note, noteText }: NoteBoxProps) {
  return (
    <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
      <p className="text-[13px] leading-6 text-[#334155]">
        <span className="font-bold text-blue-700">{note}</span> {noteText}
      </p>
    </div>
  );
}
