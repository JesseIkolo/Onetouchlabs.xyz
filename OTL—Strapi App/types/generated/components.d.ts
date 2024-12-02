import type { Schema, Attribute } from '@strapi/strapi';

export interface AdressAdresses extends Schema.Component {
  collectionName: 'components_adress_adresses';
  info: {
    displayName: 'adresses';
    icon: 'envelop';
  };
  attributes: {
    phone: Attribute.String;
    email: Attribute.Email;
    country: Attribute.String;
    region: Attribute.String;
    town: Attribute.String;
  };
}

export interface LinksSocialNetwork extends Schema.Component {
  collectionName: 'components_links_social_networks';
  info: {
    displayName: 'social_network';
  };
  attributes: {};
}

export interface LinksSocialUrl extends Schema.Component {
  collectionName: 'components_links_social_urls';
  info: {
    displayName: 'social_url';
    icon: 'link';
  };
  attributes: {};
}

export interface LinksUrls extends Schema.Component {
  collectionName: 'components_links_urls';
  info: {
    displayName: 'urls';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface MediaTrainingMedia extends Schema.Component {
  collectionName: 'components_media_training_medias';
  info: {
    displayName: 'training_media';
    icon: 'attachment';
  };
  attributes: {
    cover_media: Attribute.Media;
    background_media: Attribute.Media;
    background_decoration: Attribute.Media;
  };
}

export interface ParaBlocParaBloc extends Schema.Component {
  collectionName: 'components_para_bloc_para_blocs';
  info: {
    displayName: 'para_bloc';
    description: '';
  };
  attributes: {
    heading_title: Attribute.Text;
    para_text: Attribute.Text;
    bloc_illustration: Attribute.Media;
  };
}

export interface TextBlocTextContent extends Schema.Component {
  collectionName: 'components_text_bloc_text_contents';
  info: {
    displayName: 'content_bloc';
    icon: 'database';
    description: '';
  };
  attributes: {
    heading_title: Attribute.Text;
    text_paragraph: Attribute.Text;
    para_bloc: Attribute.Component<'para-bloc.para-bloc', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'adress.adresses': AdressAdresses;
      'links.social-network': LinksSocialNetwork;
      'links.social-url': LinksSocialUrl;
      'links.urls': LinksUrls;
      'media.training-media': MediaTrainingMedia;
      'para-bloc.para-bloc': ParaBlocParaBloc;
      'text-bloc.text-content': TextBlocTextContent;
    }
  }
}
