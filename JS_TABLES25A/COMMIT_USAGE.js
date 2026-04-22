// COMMIT_USAGE.js

window.COMMIT_USAGE = {
  "tables": {
    "COMMIT_USAGE": {
      "columns": {
        "COMMIT_USAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "COMMIT_USAGE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CAPACITY_COMMITMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CAPACITY_COMMITMENT"
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "PLANNED_NUM_SHIPS": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "FINAL_NUM_SHIPS": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "FINAL_MILEAGE": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "FINAL_MILEAGE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "FINAL_MILEAGE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FINAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FINAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "FINAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FINAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FINAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "FINAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FINAL_MONETARY": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FINAL_MONETARY_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "FINAL_MONETARY_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FINAL_FEU_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FINAL_TEU_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FINAL_EQUIP_GRP_PROFILE_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FINAL_EQUIP_GRP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE"
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_OVERRIDE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "OVERRIDE_NUM_SHIPS": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "OVERRIDE_MILEAGE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OVERRIDE_MILEAGE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "OVERRIDE_MILEAGE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OVERRIDE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OVERRIDE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "OVERRIDE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OVERRIDE_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OVERRIDE_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "OVERRIDE_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OVERRIDE_MONETARY": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OVERRIDE_MONETARY_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "OVERRIDE_MONETARY_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OVERRIDE_FEU_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OVERRIDE_TEU_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OVERRIDE_EQUIP_GRP_PROFILE_CNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OVERRIDE_EQUIP_GRP_PROFILE_GID": {
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
      "fk_tables": [
        "SHIP_COMMIT_COUNT_JOIN"
      ]
    }
  }
};
