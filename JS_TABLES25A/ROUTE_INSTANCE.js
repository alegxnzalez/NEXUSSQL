// ROUTE_INSTANCE.js

window.ROUTE_INSTANCE = {
  "tables": {
    "ROUTE_INSTANCE": {
      "columns": {
        "ROUTE_INSTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ROUTE_INSTANCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "ROUTE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_TEMPLATE"
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Based on UTC timezone. "
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Based on UTC timezone. "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_CLOSED_LOOP": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Copied from Template. "
        },
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "B",
            "S",
            "A"
          ],
          "info": "Copied from Template.  B: BUY;  S: SELL;  A: ALL "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV"
        },
        "EQUIP_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE"
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TRANSPORT_MODE"
        },
        "START_DEPOT_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
        },
        "END_DEPOT_LOC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
        },
        "ALLOW_OVERLAPPING_SHIPMENTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Copied from Route Template, can be overridden here at instance level. "
        },
        "IS_DEVIATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "PLANNED_DURATION": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PLANNED_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "PLANNED_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PLANNED_LOADED_DIST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PLANNED_LOADED_DIST_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "PLANNED_LOADED_DIST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PLANNED_DEADHEAD_DIST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PLANNED_DEADHEAD_DIST_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "PLANNED_DEADHEAD_DIST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PLANNED_TOTAL_DIST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PLANNED_TOTAL_DIST_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "PLANNED_TOTAL_DIST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PLANNED_DEADHEAD_PERC": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "= PLANNED_DEADHEAD_DISTANCE / PLANNED_TOTAL_DISTANCE "
        },
        "ACTUAL_DURATION": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ACTUAL_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "ACTUAL_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ACTUAL_LOADED_DIST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ACTUAL_LOADED_DIST_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "ACTUAL_LOADED_DIST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ACTUAL_DEADHEAD_DIST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ACTUAL_DEADHEAD_DIST_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "ACTUAL_DEADHEAD_DIST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ACTUAL_TOTAL_DIST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ACTUAL_TOTAL_DIST_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "ACTUAL_TOTAL_DIST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ACTUAL_DEADHEAD_PERC": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "= ACTUAL_DEADHEAD_DISTANCE / ACTUAL_TOTAL_DISTANCE"
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
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
      "fk_tables": [
        "ROUTE_INSTANCE_INV_PARTY",
        "ROUTE_INSTANCE_LEG",
        "ROUTE_INSTANCE_REFNUM",
        "ROUTE_INSTANCE_REMARK",
        "ROUTE_INSTANCE_STATUS"
      ]
    }
  }
};
