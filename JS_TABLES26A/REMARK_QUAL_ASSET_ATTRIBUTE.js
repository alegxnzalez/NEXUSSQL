// REMARK_QUAL_ASSET_ATTRIBUTE.js

window.REMARK_QUAL_ASSET_ATTRIBUTE = {
  "tables": {
    "REMARK_QUAL_ASSET_ATTRIBUTE": {
      "description": "Extends REMARK_QUAL table to define asset related attributes.",
      "columns": {
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REMARK_QUAL"
},
        "IS_FOR_DRIVER_CHK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Designate this special service is to be checked during the driver assignment."
},
        "IS_FOR_EQUIP_CHK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Designate this special service is to be checked during the equipment assignment."
},
        "IS_FOR_PU_CHK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Designate this special service is to be checked during the power unit assignment."
},
        "DRIVER_LEVEL": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "DRIVER",
                    "DRIVER_TYPE",
                    "ALL",
                    "NOT_APPLICABLE"
          ],
          "info": "Designate this special service is to apply at the driver or driver type level."
},
        "EQUIP_LEVEL": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "EQUIPMENT",
                    "EQUIPMENT_TYPE",
                    "ALL",
                    "NOT_APPLICABLE"
          ],
          "info": "Designate this special service is to apply at the equipment or equipment type level."
},
        "PU_LEVEL": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "POWER_UNIT",
                    "POWER_UNIT_TYPE",
                    "ALL",
                    "NOT_APPLICABLE"
          ],
          "info": "Designate this special service is to apply at the power unit or power unit type level."
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