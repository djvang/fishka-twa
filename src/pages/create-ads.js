import {
  Page,
  BlockTitle,
  List,
  ListItem,
  ListInput,
  Button,
  BlockFooter,
  Segmented,
} from "framework7-react";
import { BackButton } from "../components/BackButton";
import { MainButton } from "../components/MainButton";
import { useEffect, useState } from "react";
import { confirm } from "../utils/confirm";

const CreateAds = ({ f7router }) => {
  const [activeStrongButton, setActiveStrongButton] = useState(0);

  useEffect(() => {
    const WebApp = window.Telegram.WebApp;

    WebApp.enableClosingConfirmation();

    return () => {
      WebApp.disableClosingConfirmation();
    };
  }, []);

  return (
    <Page name="create-ads">
      <BackButton
        onClick={() => {
          confirm("Do you want to delete your ad?")
            .then(() => {
              f7router.back();
            })
            .catch(() => console.log("Cancel"));
        }}
      />
      <MainButton
        text="Continue"
        onClick={() => console.log("Continue Create Ads")}
      />

      <BlockTitle>Create an Ad</BlockTitle>
      <List strong dividers inset>
        <ListItem
          title="I want to"
          after={
            <Segmented strong tag="p" style={{ margin: 0 }}>
              <Button
                active={activeStrongButton === 0}
                onClick={() => setActiveStrongButton(0)}
              >
                Buy
              </Button>
              <Button
                active={activeStrongButton === 1}
                onClick={() => setActiveStrongButton(1)}
              >
                Sell
              </Button>
            </Segmented>
          }
        />
        <ListItem
          title={`${activeStrongButton === 0 ? "Buy" : "Sell"} Crypto`}
          after="TONAI"
        />
        <ListItem title="Fiat Currency" after="FISHKA" />
        <ListItem
          title="Price Type"
          smartSelect
          smartSelectParams={{ openIn: "popup", searchbar: false }}
        >
          <select name="price-type" defaultValue={"fixed"}>
            <option value="fixed">Fixed</option>
            <option value="floating">Floating</option>
          </select>
        </ListItem>
      </List>

      <BlockTitle>Fixed price · FISHKA</BlockTitle>
      <List strong dividers inset>
        <ListInput placeholder="Unit price"></ListInput>
        <BlockFooter slot="after-list">
          <p>Market price: 38.72 FISHKA</p>
        </BlockFooter>
      </List>

      <BlockTitle>Amount · TONAI</BlockTitle>
      <List strong dividers inset>
        <ListInput placeholder="Amount" />
        <BlockFooter slot="after-list">
          <p>Your balance: 0 TONAI</p>
        </BlockFooter>
      </List>

      <BlockTitle>Order limit · FISHKA</BlockTitle>
      <List strong dividers inset>
        <ListInput placeholder="Min" />
      </List>

      <List strong dividers inset>
        <ListItem
          title="Payment Timeout"
          smartSelect
          smartSelectParams={{ openIn: "popup", searchbar: false }}
          after={
            <Button fill popoverOpen=".payments-timeout-menu">
              15 minutes
            </Button>
          }
        >
          <select name="timeout" defaultValue={"15"}>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
          </select>
        </ListItem>
      </List>
    </Page>
  );
};

export default CreateAds;
