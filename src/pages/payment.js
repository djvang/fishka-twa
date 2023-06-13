import {
  Page,
  List,
  ListInput,
  BlockTitle,
  ListButton,
} from "framework7-react";
import { BackButton } from "../components/BackButton";
import { MainButton } from "../components/MainButton";

const Payment = () => {
  return (
    <Page name="payment">
      <BackButton />
      <MainButton
        text="Update payment method"
        onClick={() => console.log("Update payment method")}
      />

      <BlockTitle>Okko · FISHKA</BlockTitle>
      <List strong dividersIos inset>
        <ListInput
          type="text"
          floatingLabel
          label="Payment name"
          placeholder="Payment name"
          clearButton
          value={"FISHKA name"}
        />
        <ListInput
          type="tel"
          floatingLabel
          label="Phone number"
          placeholder="Phone number"
          value={"+38063000000"}
          clearButton
        />
      </List>
      <List strong dividersIos inset>
        <ListButton textColor="red">Remove Payment Method</ListButton>
      </List>
    </Page>
  );
};

export default Payment;
