// EQUIPMENT_GROUP_COMPARTMENT.js

window.EQUIPMENT_GROUP_COMPARTMENT = {
  "tables": {
    "EQUIPMENT_GROUP_COMPARTMENT": {
      "columns": {
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The GID for the equipment group. "
        },
        "COMPARTMENT_NUM": {
          "type": "NUMBER(2)",
          "nullable": false,
          "key_value": true,
          "info": "Identifies the compartment by number. "
        },
        "MAX_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum weight for the equipment group compartment. "
        },
        "MAX_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the maximum weight. "
        },
        "MAX_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum weight for the equipment group compartment in base units. "
        },
        "MAX_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum capacity for the equipment group compartment. "
        },
        "MAX_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the max volume. "
        },
        "MAX_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum capacity for the equipment group compartment in base units. "
        },
        "MAX_METRIC3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "N/A "
        },
        "MAX_METRIC4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "N/A "
        },
        "LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of the equipment group compartment. "
        },
        "LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for LENGTH column. "
        },
        "LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Length in base units. "
        },
        "WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width of the equipment group compartment. "
        },
        "WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the width column. "
        },
        "WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width in base units. "
        },
        "HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height of the equipment group compartment. "
        },
        "HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for HEIGHT column. "
        },
        "HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height in base units. "
        },
        "TEMPERATURE_CONTROL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TEMPERATURE_CONTROL",
          "info": "The GID to define the temperature controls value for the commodity. "
        },
        "ALLOW_COMMODITY_MIXING": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if different commodity items can be shipped in the same compartment in an equipment group. Valid values are Y for yes and N for no. "
        },
        "DOOR_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Defines the height of the door for the compartment. "
        },
        "DOOR_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The door height unit of measure. "
        },
        "DOOR_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The door height in the base unit of measure. "
        },
        "CURVE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROOF_CURVATURE",
          "info": "The curve function for the roof of the compartment. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "START_LENGTH_POSITION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Defines the starting position for the compartment length wise. "
        },
        "START_LENGTH_POSITION_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The start length position in the base unit of measure. "
        },
        "START_LENGTH_POSITION_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The start length position unit of measure. "
        },
        "START_WIDTH_POSITION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Defines the starting position for the compartment, width wise. "
        },
        "START_WIDTH_POSITION_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The start width position in the base unit of measure. "
        },
        "START_WIDTH_POSITION_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The start width position unit of measure. "
        },
        "START_HEIGHT_POSITION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Defines the starting position for the compartment, height wise. "
        },
        "START_HEIGHT_POSITION_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The start height position in the base unit of measure. "
        },
        "START_HEIGHT_POSITION_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The start height position unit of measure. "
        },
        "COMPARTMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMPARTMENT_TYPE",
          "info": "A GID to define the compartment type. "
        },
        "HAS_METER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the compartment has METER or not (The METER is a device that is used the measure how much product is discharged at any given stop). "
        },
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMMODITY",
          "info": "Commodity that is compatible with the compartment. "
        },
        "IS_BULK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if it is a BULK. If Y then BULK If N then PACKAGED. "
        },
        "WIDTH_OFFSET": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Offset by which the compartment needs to be shifted widthwise to get the OUT OF GAUGE envelope. "
        },
        "WIDTH_OFFSET_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The width offset unit of measure. "
        },
        "WIDTH_OFFSET_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width offset in the base unit of measure. "
        },
        "LENGTH_FWD_OFFSET": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Offset by which the compartment needs to be shifted FORWARD lengthwise to get the OUT OF GAUGE envelope. "
        },
        "LENGTH_FWD_OFFSET_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The length forward offset unit of measure. "
        },
        "LENGTH_FWD_OFFSET_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length forward offset in the base unit of measure."
        }
      },
      "fk_tables": [
        "COMPARTMENT_PI_JOIN"
      ]
    }
  }
};
