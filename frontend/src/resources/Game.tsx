//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const GameTitle = () => {
  const record = useRecordContext();
  return <span>Game {record ? `"${record.gameName}"` : ''}</span>;
};

export const GameList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="gameName" />
      <TextField source="gameType" />
      <TextField source="rulesDescription" />
      <NumberField source="numberOfPlayers" />
      <TextField source="difficultyLevel" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const GameEdit = () => (
  <Edit title={<GameTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="gameName" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="gameType" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="rulesDescription" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="numberOfPlayers" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="difficultyLevel" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const GameCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="gameName" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="gameType" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="rulesDescription" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="numberOfPlayers" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="difficultyLevel" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
];