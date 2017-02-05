import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';

const Faq = ({ isOpen, onRequestClose }) => (
  <Dialog
      title="Our Mission"
      open={isOpen}
      onRequestClose={onRequestClose}
      modal={false}
    >
    Ecommerce has become increasing important to our everyday lives and
    the global economy. By allowing for items to transfer between
    people all the around the world, ecommerce has allowed for people
    to receive many types of goods from the other side of the globe, even
    those that would have been considered rare luxuries just years ago.

    Even so, there continues to be an inbalance in the distribution of
    items. Goods in foreign countries are still sometimes much cheaper
    or more expensive than they are over here. With this project, we
    hope to encourage to gain experience as a internet seller.

    The search tool we created highlights how different prices of
    goods can be between China and the United States. In addition, we
    have shown the major costs you would face as a small-time seller on
    marketplaces like Amazon and Ebay.

    Through programs like Amazon Fulfillment, selling on ecommerce
    marketplaces has become as easy as simply discovering good
    items to sell. We hope this project spurs you to consider
    ecommerce as a source for passive income or as a means to help
    the lives of others.
  </Dialog>
);

Faq.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Faq;
