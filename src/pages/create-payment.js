import { Page, List, ListInput, BlockTitle } from "framework7-react";
import { BackButton } from "../components/BackButton";
import { MainButton } from "../components/MainButton";

const CreatePayment = () => {
  return (
    <Page name="create-payment">
      <BackButton />
      <MainButton
        text="Add payment method"
        onClick={() => console.log("Add payment method")}
      />

      <BlockTitle>Okko · FISHKA</BlockTitle>
      <List strong dividersIos inset>
        <ListInput
          type="text"
          floatingLabel
          label="Payment name"
          placeholder="Payment name"
          clearButton
        />
        <ListInput
          type="tel"
          floatingLabel
          label="Phone number"
          placeholder="Phone number"
          clearButton
        />
      </List>
    </Page>
  );
};

export default CreatePayment;
