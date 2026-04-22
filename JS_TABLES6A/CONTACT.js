// CONTACT.js

window.CONTACT = {
  "tables": {
    "CONTACT": {
      "columns": {
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the contact for the location. "
        },
        "CONTACT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the contact for the location. "
        },
        "FIRST_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The given name of the contact person for the location. "
        },
        "LAST_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The surname of the contact person for the location. "
        },
        "JOB_TITLE": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "The title for the contact person at the location. "
        },
        "EMAIL_ADDRESS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The email address of the contact person for the location. "
        },
        "PHONE1": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "info": "The primary telephone number for the location's contact person. "
        },
        "PHONE2": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "info": "The secondary telephone number for the location's contact person. "
        },
        "FAX": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "info": "The facsimile number for the contact person for the location. "
        },
        "LANGUAGE_SPOKEN": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The language the contact person at the location speaks. "
        },
        "IS_PRIMARY_CONTACT": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if this contact person at the location is the primary contact person (if so Y) or not (if not N). "
        },
        "TELEX": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The telephone number for telex communications for the location's contact person. "
        },
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXTERNAL_SYSTEM",
          "info": "The external system GID. "
        },
        "NOTES": {
          "type": "VARCHAR2(2000)",
          "nullable": false,
          "info": "Text describing something regarding the contact person for the location or the location itself. "
        },
        "GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_USER",
          "info": "The GL user GID. "
        },
        "RECIPIENT_DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The domain of a message recipient. "
        },
        "ROUTE_THROUGH_LOCATION": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the notification should use location. "
        },
        "CONTACT_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
            "PERSON",
            "GROUP"
          ],
          "info": "Defines whether a contact is a person or group. "
        },
        "IS_BROADCAST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Valid only if the contact_type = 'GROUP'.  This is a Boolean flag which controls whether GC3 creates a single notification message and broadcasts (i.e. cc) it to each group member or whether GC3 creates a message customized for each member. "
        },
        "GROUP_SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Valid only if the contact_type = 'GROUP'.  The saved_query could then define which individual contacts belong to the contact_group. "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the location. "
        },
        "IS_EMAIL_VIRUS_PROTECTED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, document attachments may be sent to the contact without virus checking. "
        },
        "CONSOLIDATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOLIDATION_PROFILE",
          "info": "The GID for the consolidation profile.  You would enter a Consolidation Profile if you are using consolidated notification. If a consolidation profile is entered, it will apply to all contact notifications that do not have a consolidated notification profile. "
        },
        "CONSOLIDATED_NOTIFY_ONLY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Select the Consolidated Notify Only check box if the only notification sent is to be consolidated and the communication method is email, fax or message center. "
        },
        "IS_NOTIFICATION_ON": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "No notification will be sent to the contact if this field is set to false ('N'). "
        },
        "TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_ZONE",
          "info": "Time zone for the contact. "
        },
        "FROM_ADDR_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "The GID that contains a contact's 'From-Address' details. Valid only if "
        },
        "IS_FROM_ADDRESS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if a contact is a 'From-Address' contact. "
        },
        "MIDDLE_NAME": {
          "type": "VARCHAR2(60)",
          "nullable": true,
          "info": "The middle name of the contact. "
        },
        "CELL_PHONE": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "info": "Contains the mobile/cell  phone number for the location's contact person.  Do not include special characters such as \"+\" and \"-\". "
        },
        "SEND_AS_MESSAGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates that messages should be sent to message center. "
        },
        "MESSAGE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MESSAGE_PROFILE",
          "info": "The GID for the message profile. A message profile provides a grouping of stylesheet profiles for inbound message processing. It represents the different formats a device can send to the system. A message profile is assigned to a contact. If the message type for an incoming message, the system attempts to apply the stylesheet profiles listed in the message profile. They are applied to the incoming message in the order of the Attempt Sequence of the message profile. "
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
        "ALTERNATE_NAME": {
          "type": "VARCHAR2(360)",
          "nullable": true,
          "info": "If the contact goes by an alternate name the alternate name should be entered here. For example, real name Laurence Tureaud, alternate name Mr. T.\nNote: GTM bases restricted party screening on the party's company name. If the contact has an alternate name, the contact's alternate name is screened instead. "
        },
        "COMPANY_NAME": {
          "type": "VARCHAR2(360)",
          "nullable": true,
          "info": "Company name for this party. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Enter any additional descriptive information for this party/contact. "
        },
        "IPP_PRINTER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Used to assign an IPP printer as a recipient of notifications, particularly of document or report events. "
        },
        "ECM_USER": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "If the contact is acting as a reviewer or subscriber to documents within Oracle ECM, the ECM user mapping to the contact. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "NAME_ADDRESS_UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date on which the details - FIRST_NAME,LAST_NAME,COMPANY_NAME,ALTERNATE_NAME,LOCATION_GID are modified.RPLS checks this date before it starts screening. "
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Indicators are icons that can be assigned to business objects that can be displayed in search Results pages and other lists to indicate the condition or state of a business object. You can use indicators to mark the history, status or any other condition of a business object. "
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "The GID for the user defined image/icon. Up to five User-Defined Image fields can be configured to appear on the Search and Results page that let you query and review the images that are assigned to a business object. Images can be assigned to business objects to visually emphasize certain characteristics such as shipments containing hazardous material, orders for hot commodities, or shipments with over dimensional freight. "
        },
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date "
        },
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number "
        },
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
        }
      },
      "fk_tables": [
        "BN_NAMED_RANGE_INV_PARTY",
        "CHARTER_VOYAGE_INVOLVED_PARTY",
        "CLAIM",
        "CLAIM_COST",
        "CLAIM_INVOLVED_PARTY",
        "CLAIM_LINE_ITEM_COST",
        "CONSOL_INVOLVED_PARTY",
        "CONTACT",
        "CONTACT_COM_METHOD",
        "CONTACT_CORPORATION",
        "CONTACT_GROUP",
        "CONTACT_POINT",
        "CONTACT_PREFERENCE",
        "CONTACT_PROFILE_DETAIL",
        "CONTACT_STATUS",
        "CORPORATION_INVOLVED_PARTY",
        "CUSTOMER_ACCOUNT_NUMBER",
        "DEVICE",
        "DIAG_PERFORMANCE_SCHEDULE",
        "DM_TRANSACTION_INVOLVED_PARTY",
        "DOMAIN_SETTING",
        "DRIVER",
        "DRIVER_INV_PARTY",
        "GTM_BOND_INV_PARTY",
        "GTM_CAMPAIGN_INVOLVED_PARTY",
        "GTM_CAMPAIGN_REQD_REVIEWER",
        "GTM_CAMPAIGN_REQD_SUBSCRIBER",
        "GTM_CA_LINE_INV_PARTY",
        "GTM_CA_LINE_REQDD_REVIEW",
        "GTM_CA_LINE_REQD_REVIEWER",
        "GTM_CA_LINE_REQD_SUBSCRIBER",
        "GTM_CONTACT_COMMENT",
        "GTM_CONTACT_ST_SCREEN",
        "GTM_CRULE_DOCUMENT_REVIEWER",
        "GTM_CRULE_DOCUMENT_SUBSCRIBER",
        "GTM_ITEM_COUNTRY_OF_ORIGIN",
        "GTM_LICENSE_INVOLVED_PARTY",
        "GTM_PARTY_CODE",
        "GTM_PARTY_LAST_SCREENING",
        "GTM_PARTY_LIST_GROUP_D",
        "GTM_PARTY_REFNUM",
        "GTM_PARTY_REMARK",
        "GTM_PARTY_SCREENING",
        "GTM_REG_INVOLVED_PARTY",
        "GTM_STRUCTURE_INVOLVED_PARTY",
        "GTM_TRANSACTION_INVOLVED_PARTY",
        "GTM_TRANS_LINE_INV_PARTY",
        "GTM_TRANS_REQDD_REVIEW",
        "GTM_TRANS_REQD_REVIEWER",
        "GTM_TRANS_REQD_SUBSCRIBE",
        "GTM_TR_PARTY_SCREEN",
        "IE_SS_MATCH_OBJ_INV_PARTY",
        "INVOICE_INVOLVED_PARTY",
        "INVOICE_TR_EVENT_CONTACT",
        "INVOLVED_PARTY_QUAL",
        "ITEM_ORIGIN",
        "ITEM_QF_REQDD_REVIEW",
        "ITEM_QF_REQD_REVIEWER",
        "ITEM_QF_REQD_SUBSCRIBER",
        "ITEM_REQDOC_DOC_REVIEW",
        "ITEM_REQDOC_REVIEWER",
        "ITEM_REQDOC_SUBSCRIBER",
        "I_MESSAGE",
        "I_TRANSMISSION",
        "JOB_INVOLVED_PARTY",
        "JOB_TR_EVENT_CONTACT",
        "LEG_INVOLVED_PARTY",
        "MAIL_PGROUP_PROF_CONT",
        "MAIL_PPROFILE_CONTACT",
        "NFRC_RULE_INV_PARTY",
        "NFRC_RULE_JOB_INV_PARTY",
        "NOTIFY_REQUEST",
        "NOTIFY_SUBJECT_CONTACT",
        "OB_INVOLVED_PARTY",
        "OB_LINE_INVOLVED_PARTY",
        "OB_SU_CONTENT_INV_PARTY",
        "OB_SU_INVOLVED_PARTY",
        "OB_TR_EVENT_CONTACT",
        "ORDER_MOVEMENT_INV_PARTY",
        "ORDER_RELEASE_INV_PARTY",
        "ORDER_RELEASE_LINE_INV_PARTY",
        "ORDER_RELEASE_TR_EVENT_CONTACT",
        "PARTNER_ITEM",
        "PARTY_SITE",
        "QUOTE_INVOLVED_PARTY",
        "QUOTE_TR_EVENT_CONTACT",
        "Q_INTEGRATION_OUT",
        "RATE_LOAD_DEFINITION_INV_PARTY",
        "RATE_OFFERING_INV_PARTY",
        "REPETITION_SCHEDULE_INV_PARTY",
        "ROUTE_INSTANCE_INV_PARTY",
        "ROUTE_INSTANCE_LEG_INV_PARTY",
        "ROUTE_TEMPLATE_INV_PARTY",
        "ROUTE_TEMPLATE_LEG_INV_PARTY",
        "SC_INVOLVED_PARTY",
        "SERVPROV",
        "SHIPMENT",
        "SHIPMENT_INVOLVED_PARTY",
        "SHIPMENT_REQDOC_DOC_REVIEW",
        "SHIPMENT_REQDOC_REVIEWER",
        "SHIPMENT_REQDOC_SUBSCRIBER",
        "SHIPMENT_STOP_INV_PARTY",
        "SHIPMENT_STOP_SU_INV_PARTY",
        "SHIPMENT_TR_EVENT_CONTACT",
        "SHIPPING_AGENT_CONTACT",
        "SHIP_GROUP_INVOLVED_PARTY",
        "SHIP_GROUP_RULE_INV_PARTY",
        "SHIP_GROUP_TR_EVENT_CONTACT",
        "SKU_INVOLVED_PARTY",
        "TRANSACTIONAL_EVENT_CONTACT",
        "TRANSPORT_NETWORK_INV_PARTY"
      ]
    }
  }
};
