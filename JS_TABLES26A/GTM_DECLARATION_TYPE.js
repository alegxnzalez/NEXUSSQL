// GTM_DECLARATION_TYPE.js

window.GTM_DECLARATION_TYPE = {
  "tables": {
    "GTM_DECLARATION_TYPE": {
      "description": "This table is for creating/maintaining different order type names like ASN, an OTM Shipment or Delivery.",
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
        "GTM_DECLARATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "This field represents unique declaration type ID accross all domains."
},
        "GTM_DECLARATION_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This field represents unique declaration type ID in a particular domain."
},
        "GTM_DECLARATION_TYPE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Name for a declaration type."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "This field describes the declaration type."
},
        "GTM_REGIME_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGIME",
          "info": "This field describes the regime of the declaration type."
},
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "This field represents the code provided by goverments or regimes for any type of declaration."
},
        "REQ_BS_STATUS_GRP_PF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_GROUP_PROFILE",
          "info": "This field represents request status group profile. Which is a foreign key to BS_STATUS_GROUP_PROFILE table."
},
        "RESP_BS_STATUS_GRP_PF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_GROUP_PROFILE",
          "info": "This field represents response status group profile. Which is a foreign key to BS_STATUS_GROUP_PROFILE table."
},
        "LOGIC_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_CONFIG",
          "info": "This field represents logic configuration used. Which is a foreign key to LOGIC_CONFIG table."
}
      },
      "fk_tables": [
        "GTM_COMPLIANCE_RULE",
        "GTM_DECL_TYPE_PROFILE_D",
        "GTM_DECL_TYPE_VALUE_QUAL_MAP",
        "GTM_ENTRY_EXIT_PROFILE",
        "GTM_TIP_DUTY_TAX_CONFIG",
        "GTM_TIP_INVENTORY",
        "GTM_TIP_INV_MOVEMENT",
        "GTM_TIP_ZONE_STATUS_CONSTR",
        "GTM_TRANSACTION"
]
    }
  }
};