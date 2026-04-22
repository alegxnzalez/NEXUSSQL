// COMMIT_DOW_OVERRIDE.js

window.COMMIT_DOW_OVERRIDE = {
  "tables": {
    "COMMIT_DOW_OVERRIDE": {
      "columns": {
        "CAPACITY_COMMITMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CAPACITY_COMMITMENT"
        },
        "DAY_OF_WEEK": {
          "type": "NUMBER()",
          "nullable": false,
          "values": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
          ],
          "key_value": true,
          "info": "valid value from 0 .. 6, referring Sunday, Monday... Saturday"
        },
        "NUMBER_OF_SHIPMENTS": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MILEAGE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MILEAGE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MILEAGE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MONETARY": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MONETARY_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "MONETARY_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FEU_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TEU_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIPMENT_GROUP_PROFILE_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE"
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
