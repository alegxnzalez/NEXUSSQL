// CAPACITY_COMMITMENT_ALLOC.js

window.CAPACITY_COMMITMENT_ALLOC = {
  "tables": {
    "CAPACITY_COMMITMENT_ALLOC": {
      "columns": {
        "CAPACITY_COMMITMENT_ALLOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CAPACITY_COMMITMENT_ALLOC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "X_LANE"
        },
        "COMMITMENT_LANE_OBJECT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "SHIPMENT",
            "ORDER"
          ]
        },
        "ALLOCATION_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "SHIPMENT",
            "MILEAGE",
            "WEIGHT",
            "VOLUME",
            "MONETARY",
            "FEU",
            "TEU",
            "EQUIPMENT_GROUP_PROFILE"
          ]
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE"
        },
        "TIME_PERIOD_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_PERIOD_TYPE"
        },
        "IS_RECURRING": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
        },
        "ALLOCATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ALLOCATION_GROUP"
        }
      },
      "fk_tables": [
        "CAPACITY_COMMITMENT_ALLOC_D",
        "COMMIT_ALLOC_USAGE"
      ]
    }
  }
};
