// CAPACITY_COMMITMENT.js

window.CAPACITY_COMMITMENT = {
  "tables": {
    "CAPACITY_COMMITMENT": {
      "columns": {
        "CAPACITY_COMMITMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "CAPACITY_COMMITMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "CAPACITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CAPACITY_GROUP",
          "info": "Unique Identifier for each CAPCITY GROUP. This is a combination of XID and Domain Name. This is part of the compsite PK for this table. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The date from which the CAPACITY Commitment is applicable. This is part of the compsite PK for this table. "
        },
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "A unique identifier to define and group the equipments within the system. The gid contains the domain portion. "
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
        "NUMBER_OF_SHIPMENTS": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "IS_COUNT_NUMBER_OF_SHIPMENTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
          "nullable": true,
          "info": "MILEAGE in base units. "
        },
        "IS_COUNT_MILEAGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
          "nullable": true,
          "info": "WEIGHT in base units. "
        },
        "IS_COUNT_WEIGHT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
          "nullable": true,
          "info": "VOLUME in base units. "
        },
        "IS_COUNT_VOLUME": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "MONETARY": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MONETARY_CURRENCY_GID": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "MONETARY_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "MONETARY in base units. "
        },
        "IS_COUNT_MONETARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "FEU_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IS_COUNT_FEU": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "TEU_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IS_COUNT_TEU": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "EQUIPMENT_GROUP_PROFILE_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IS_COUNT_EQUIP_GROUP_PROFILE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "COMMITMENT_LANE_OBJECT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "SHIPMENT",
            "ORDER"
          ],
          "info": "Should this capacity commitment be recorded by shipment, or by order? "
        },
        "PRIMARY_COUNT_TYPE": {
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
          ],
          "info": "This is used to determine which one to be displayed in UI if the commitment has multiple count types"
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
        }
      },
      "fk_tables": [
        "COMMIT_DOW_OVERRIDE",
        "COMMIT_USAGE"
      ]
    }
  }
};
