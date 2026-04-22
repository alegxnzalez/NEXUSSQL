// GTM_DECL_MESSAGE_REFNUM.js

window.GTM_DECL_MESSAGE_REFNUM = {
  "tables": {
    "GTM_DECL_MESSAGE_REFNUM": {
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
        "GTM_DECL_MESSAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DECL_MESSAGE",
          "info": "GTM Declaration Message GID is part of the primary key and is a foreign key to the primary key of table GTM_DECL_MESSAGE. "
        },
        "GTM_TRANS_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANS_REFNUM_QUAL",
          "info": "It is Transaction Reference Number qualifier ID and is a foreign key to the primary key of GTM_TRANS_REFNUM_QUAL table. "
        },
        "REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "Value of reference number."
        }
      },
      "fk_tables": []
    }
  }
};
