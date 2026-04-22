// SC_INVOLVED_PARTY.js

window.SC_INVOLVED_PARTY = {
  "tables": {
    "SC_INVOLVED_PARTY": {
      "columns": {
        "SECONDARY_CHARGE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SECONDARY_CHARGE_RULE",
          "info": "The secondary charge rule this involved party is associated with "
        },
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "A pointer to the unique idenifier for the involved party. The involved party qual can be: BILL-FROM BILL-TO CONSIGNEE CUSTOMER-NUMBER LOGISTICS ORDEROWNER ORDERSUPPLIER REMIT-TO SHIPPER etc. "
        },
        "INVOLVED_PARTY_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "Contact ID for this involved party "
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD",
          "info": "Communications method for this involved party, e.g. EMAIL, FAX"
        },
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
        }
      },
      "fk_tables": []
    }
  }
};
