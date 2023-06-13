import { useState } from "react";

import {
  Page,
  Block,
  Card,
  List,
  ListItem,
  Icon,
  Toggle,
  BlockTitle,
  Segmented,
  Button,
} from "framework7-react";
import { BackButton } from "../components/BackButton";

const Ads = () => {
  const [activeStrongButton, setActiveStrongButton] = useState(0);

  return (
    <Page name="ads">
      <BackButton />

      <Block>
        <div className="grid grid-cols-2 grid-gap">
          <Card
            style={{ margin: 0 }}
            content={
              <>
                <div style={{ fontSize: 30, fontWeight: 700 }}>1</div>
                <div style={{ color: "gray" }}>Number of orders</div>
              </>
            }
          />
          <Card
            style={{ margin: 0 }}
            content={
              <div>
                <div style={{ fontSize: 30, fontWeight: 700 }}>0%</div>
                <div style={{ color: "gray" }}>Order complition rate</div>
              </div>
            }
          />
        </div>
      </Block>

      <List dividersIos strong inset>
        <ListItem title="Payment Settings" link="/payments/">
          <Icon color="blue" slot="media" f7="creditcard_fill" />
        </ListItem>
        <ListItem title="Trades" link={false}>
          <Icon
            color="cornflowerblue"
            slot="media"
            f7="arrow_right_arrow_left_square_fill"
          />
          <Toggle defaultChecked />
        </ListItem>
      </List>

      <BlockTitle>Your Ads</BlockTitle>
      <Block>
        <Segmented strong tag="p">
          <Button
            active={activeStrongButton === 0}
            onClick={() => setActiveStrongButton(0)}
          >
            Purchase
          </Button>
          <Button
            active={activeStrongButton === 1}
            onClick={() => setActiveStrongButton(1)}
          >
            Sale
          </Button>
        </Segmented>
      </Block>
      <List dividersIos inset strong>
        <ListItem link="/create-ads/" textColor="blue" title="Create Ad">
          <Icon slot="media" f7="plus_circle" />
        </ListItem>
      </List>
      <Block strong inset>
        <div style={{ color: "gray" }}>Your ads will appear here</div>
      </Block>
    </Page>
  );
};

export default Ads;
