import { Card, Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { useNavigate } from "react-router"
import { useAuth } from "src/utils/auth"
import { useRequests } from "src/utils/requests"
import { Task } from "src/models/Task";
import { useDate } from "src/utils/formatDate";

type Props = {
  tasksList: Task[]
  refreshList: () => void
}

const TasksTable = ({ tasksList, refreshList }: Props) => {
  const { handlePermissionExists } = useAuth();
  const { deleteTask } = useRequests();
  const { formatAPIdate } =useDate();

  const navigate = useNavigate();

  const handleEditTask = (id: number) => {
    navigate(`/tasks/edit/${id}`);
  }

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    refreshList();
  }

  return (
    <Container maxWidth='lg'>
      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Título</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Prazo Máximo</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasksList.map((task) => (
                <TableRow hover key={task.id}>
                  <TableCell>
                    <Typography
                      fontWeight="bold"
                      gutterBottom
                    >
                      #{task.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontWeight="bold"
                      gutterBottom
                    >
                      {task.title}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontWeight="bold"
                      gutterBottom
                    >
                      {task.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontWeight="bold"
                      gutterBottom
                    >
                      {task.due_date ? formatAPIdate(task.due_date ): 'Sem prazo'}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                      {
                      handlePermissionExists('change_task') && 
                        <Tooltip title="Editar tarefa" arrow>
                          <IconButton
                            color="primary"
                            size="small"
                          >
                            <EditTwoToneIcon onClick={() => handleEditTask(task.id)}/>
                          </IconButton>
                        </Tooltip>
                      }

                      {
                      handlePermissionExists('delete_task') &&
                        <Tooltip title="Excluir tarefa" arrow>
                          <IconButton
                          color="error"
                          size="small"
                          >
                            <DeleteTwoToneIcon onClick={() => handleDeleteTask(task.id)}/>
                          </IconButton>
                        </Tooltip>
                      }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  )
}

export default TasksTable