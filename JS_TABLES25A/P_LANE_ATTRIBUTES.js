// P_LANE_ATTRIBUTES.js

window.P_LANE_ATTRIBUTES = {
  "tables": {
    "P_LANE_ATTRIBUTES": {
      "columns": {
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "X_LANE"
        },
        "MOVE_CATEGORY": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "OWNERSHIP": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "PRIM_TARGET_RATE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PRIM_TARGET_RATE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "PRIM_TARGET_RATE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PRIM_FLEET_RATE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PRIM_FLEET_RATE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "PRIM_FLEET_RATE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PICK_UP_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "PICK_UP_DAY": {
          "type": "VARCHAR2(25)",
          "nullable": true
        },
        "PICK_UP_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DROP_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "DROP_DAY": {
          "type": "VARCHAR2(25)",
          "nullable": true
        },
        "DROP_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CUSTOMER_PICK_UP": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "COMMODITY_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMMODITY"
        },
        "HAZMAT": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "ORIGIN_RAMP": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "DEST_RAMP": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "AVERAGE_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AVERAGE_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "AVERAGE_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AVERAGE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AVERAGE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "AVERAGE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AVERAGE_PALLET_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AVERAGE_STOPS": {
          "type": "NUMBER()",
          "nullable": true
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
        "P_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "P_RULE_SET"
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
