import {
  Page,
  Block,
  List,
  ListItem,
  ListButton,
  BlockTitle,
} from "framework7-react";
import { BackButton } from "../components/BackButton";

const Payments = () => {
  return (
    <Page name="payments">
      <BackButton />

      <List inset strong>
        <ListButton link="/create-payment/" title="Add Payment Method" />
      </List>
      <BlockTitle>Added payment Method</BlockTitle>
      <List mediaList strong inset>
        <ListItem
          title="Fishka name"
          text={
            <div>
              <div>Okko · FISHKA</div>
              <div>+38063000000</div>
            </div>
          }
          link="/payments/:id"
        />
      </List>
    </Page>
  );
};

export default Payments;
