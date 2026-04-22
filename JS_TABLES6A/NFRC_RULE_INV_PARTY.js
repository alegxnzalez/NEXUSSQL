// NFRC_RULE_INV_PARTY.js

window.NFRC_RULE_INV_PARTY = {
  "tables": {
    "NFRC_RULE_INV_PARTY": {
      "columns": {
        "NFRC_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "NFRC_RULE"
        },
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "Copied to the involved party list of the charge (Buy or Sell determined by the value of perspective). "
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "Copied to the involved party list of the charge (Buy or Sell determined by the value of perspective). "
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD",
          "info": "Copied to the involved party list of the charge (Buy or Sell determined by the value of perspective). "
        },
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "B",
            "S"
          ],
          "key_value": true,
          "info": "Defines which NFRC charge shipment this list is to be copied to.  B = Buy, Sell = Sell."
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
