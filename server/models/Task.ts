import { model, Schema } from "mongoose";

interface ITask {
  title: string,
  description: string,
  done: boolean
}

const TaskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
}, {
  versionKey: false,
});

export default model<ITask>("Task", TaskSchema);
