import {
  Page,
  BlockTitle,
  List,
  Card,
  ListItem,
  Icon,
  Button,
  Block,
} from "framework7-react";

const Home = () => {
  return (
    <Page name="home">
      <BlockTitle large style={{ textAlign: "center" }}>
        P2P Market
      </BlockTitle>
      <Block>
        <div style={{ textAlign: "center", color: "grey", marginBottom: 20 }}>
          <span style={{ maxWidth: 220, display: "inline-block" }}>
            Buy and sell TONAI and FISHKA without intermediaries
          </span>
        </div>
        <div className="grid grid-cols-2 grid-gap">
          <Button
            href="/buy-ads-list"
            large
            fill
            iconF7="arrow_down_circle_fill"
            iconSize={18}
          >
            <span style={{ marginLeft: 6 }}>Buy</span>
          </Button>
          <Button
            href="/sell-ads-list"
            large
            fill
            iconF7="arrow_up_circle_fill"
            iconSize={18}
          >
            <span style={{ marginLeft: 6 }}>Sell</span>
          </Button>
        </div>
      </Block>

      <List dividersIos inset strong>
        <ListItem
          link="/ads/"
          title="My Ads"
          footer="Manage ads and payment settings"
        >
          <Icon slot="media" f7="list_dash" />
        </ListItem>
        <ListItem link="/create-ads/" textColor="blue" title="Create Ad">
          <Icon slot="media" f7="plus_circle" />
        </ListItem>
      </List>

      <BlockTitle>Order history</BlockTitle>

      <Card
        content={
          <div>
            <div style={{ color: "red" }}>CANCELED</div>
            <div style={{ fontWeight: 700 }}>
              Purchase 5 TONAI for 535 FISHKA
            </div>
            <div style={{ color: "gray" }}>Purchase 5 TONAI for 535 FISHKA</div>
            <div style={{ color: "gray" }}>
              December 14 at 10:53 AM · #O-000115919
            </div>
          </div>
        }
      />
      <Card
        content={
          <div>
            <div style={{ color: "green" }}>SUCCESSED</div>
            <div style={{ fontWeight: 700 }}>
              Purchase 5 TONAI for 535 FISHKA
            </div>
            <div style={{ color: "gray" }}>Purchase 5 TONAI for 535 FISHKA</div>
            <div style={{ color: "gray" }}>
              December 14 at 10:53 AM · #O-000115919
            </div>
          </div>
        }
      />
      <Card
        content={
          <div>
            <div style={{ color: "red" }}>CANCELED</div>
            <div style={{ fontWeight: 700 }}>
              Purchase 5 TONAI for 535 FISHKA
            </div>
            <div style={{ color: "gray" }}>Purchase 5 TONAI for 535 FISHKA</div>
            <div style={{ color: "gray" }}>
              December 14 at 10:53 AM · #O-000115919
            </div>
          </div>
        }
      />
      <Card
        content={
          <div>
            <div style={{ color: "green" }}>SUCCESSED</div>
            <div style={{ fontWeight: 700 }}>
              Purchase 5 TONAI for 535 FISHKA
            </div>
            <div style={{ color: "gray" }}>Purchase 5 TONAI for 535 FISHKA</div>
            <div style={{ color: "gray" }}>
              December 14 at 10:53 AM · #O-000115919
            </div>
          </div>
        }
      />
    </Page>
  );
};

export default Home;
