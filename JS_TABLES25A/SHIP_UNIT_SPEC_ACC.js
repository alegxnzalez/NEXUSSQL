// SHIP_UNIT_SPEC_ACC.js

window.SHIP_UNIT_SPEC_ACC = {
  "tables": {
    "SHIP_UNIT_SPEC_ACC": {
      "columns": {
        "SHIP_UNIT_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "This is shipment ship unit specification GID, ship unit specification will have additional specification information for a shipment ship unit. "
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "The accessorial code GID."
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
      "fk_tables": [
        "SHIP_UNIT_SPEC_ACC_REMARK"
      ]
    }
  }
};
