import { Button } from "ui";
import { useFormik } from "formik";
import usePlaylist from "../services/usePlaylist";

export default function GeneratePlaylistForm() {
  const { createPlaylist, isLoading } = usePlaylist();

  const formik = useFormik({
    initialValues: {
      mood: "",
    },
    onSubmit: (values) => {
      createPlaylist(values.mood);
    },
  });

  return (
    <>
      {isLoading && <progress className="progress progress-primary w-56" />}
      <form
        onSubmit={formik.handleSubmit}
        className="flex items-center justify-center flex-col w-full"
      >
        <input
          type="text"
          name="mood"
          placeholder="Express your current mood"
          onChange={formik.handleChange}
          value={formik.values.mood}
          className="input input-bordered input-primary w-full max-w-xs mb-10 text-center"
        />
        <Button
          label="Create me a playlist"
          type="submit"
          {...(isLoading && {
            disabled: true,
          })}
        />
      </form>
    </>
  );
}
