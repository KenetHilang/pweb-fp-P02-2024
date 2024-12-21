import { Operator, Booking, OperatorInter, BookingInter } from "../models/operator.models";
import Items from "../models/admin.models";

class OperatorServices {
  async ShowAll() {
    return await Operator.find();
  }

  async AddOperator(operatorData: Partial<OperatorInter>) {
    const operator = new Operator(operatorData);
    return await operator.save();
  }

  async UpdateOperator(id: string, operatorData: Partial<OperatorInter>) {
    try {
      const updatedOperator = await Operator.findByIdAndUpdate
      (id, operatorData, { new: true });
      if (!updatedOperator) {
        throw new Error(`Operator with ID ${id} not found`);
      }
      return updatedOperator;

    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Failed to update operator");
    }
  }

  async DeleteOperator(id: string) {
    try {
      const deletedOperator = await Operator.findByIdAndDelete(id);
      if (!deletedOperator) {
        throw new Error(`Operator with ID ${id} not found`);
      }
      return deletedOperator;

    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Failed to delete operator");
    }
  }

  async BookEquipment(bookingData: BookingInter) {
    try {
      const booking = new Booking({
        ...bookingData,
        borrow_date: new Date() // Set borrow date to current date
      });
      
      const savedBooking = await booking.save();
      if (!savedBooking) {
        throw new Error("Failed to create booking");
      }
      
      return savedBooking;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Failed to process equipment booking");
    }
  }

  async GetAllEquipment() {
    try {
      const bookings = await Booking.find().sort({ borrow_date: -1 }); // Sort by newest first
      return bookings;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Failed to fetch equipment bookings");
    }
  }

  async GetAllItems() {
    try {
      const items = await Items.find().sort({ created_at: -1 });
      return items;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Failed to fetch equipment items");
    }
  }
}

export default new OperatorServices();