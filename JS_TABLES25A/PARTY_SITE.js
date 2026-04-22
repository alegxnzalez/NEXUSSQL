// PARTY_SITE.js

window.PARTY_SITE = {
  "tables": {
    "PARTY_SITE": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "PARTY_SITE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Identifies the Gid identifier of External Party Site. "
        },
        "PARTY_SITE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Identifies the Xid identifier of External Party Site. "
        },
        "PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CONTACT",
          "info": "Identifies the External Party. "
        },
        "PARTY_SITE_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Name of the site of Party "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "Identifies the address details of the Party site"
        }
      },
      "fk_tables": [
        "GTM_CAMPAIGN_LINE",
        "GTM_STRUCTURE",
        "GTM_STRUCTURE_COMPONENT",
        "ITEM_ORIGIN",
        "ITEM_PARTNER_SITE_ASSOC",
        "ITEM_VALUE_SET"
      ]
    }
  }
};
